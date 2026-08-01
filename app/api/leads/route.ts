import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, requests, message } = body;

    const spreadsheetId = "1aFOrcgXDu2Znm9dxFDGETJsyyq6uWvWeNgz8EQ6RE2o";

    const keyFile = path.join(process.cwd(), "service-account.json");

    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const currentDate = new Date().toLocaleString("sv-SE", {
      timeZone: "Africa/Casablanca",
    });

    const values = [
      [fullName, email, phone, requests.join(" - "), message, currentDate],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Feuille 1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ success: true, message: "Data added!" });
  } catch (error) {
    console.error("Google Sheet Error:", error);
    return NextResponse.json(
      { error: "Failed to append data" },
      { status: 500 },
    );
  }
}
