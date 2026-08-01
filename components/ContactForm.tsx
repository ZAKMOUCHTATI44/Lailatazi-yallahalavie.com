"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";

const requestChoices = [
  "Participer à une conférence REVEL",
  "Candidater à un voyage SELMER",
  "Découvrir SELMER One to One",
  "Candidater à Leader One",
  "Organiser une intervention en entreprise",
  "Proposer une collaboration ou une interview",
  "Autre demande",
];

interface LeadFormValues {
  fullName: string;
  phone: string;
  email: string;
  requests: string[];
  message: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .required("Veuillez renseigner votre nom complet"),
  phone: Yup.string()
    .trim()
    .matches(/^[+0-9 ().-]{6,20}$/, "Numéro de téléphone invalide")
    .notRequired(),
  email: Yup.string()
    .trim()
    .email("Adresse mail invalide")
    .required("Veuillez renseigner votre adresse mail"),
  requests: Yup.array().of(Yup.string()),
  message: Yup.string().max(
    2000,
    "Le message est trop long (2000 caractères max)",
  ),
});

type SubmitStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const formik = useFormik<LeadFormValues>({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      requests: [],
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("idle");
      try {
        await axios.post("/api/leads", {
          fullName: values.fullName.trim(),
          phone: values.phone.trim() || null,
          email: values.email.trim(),
          requests: values.requests,
          message: values.message.trim() || null,
        });
        setStatus("success");
        resetForm();
      } catch (error) {
        setStatus("error");
      }
    },
  });

  const fieldError = (name: keyof LeadFormValues) =>
    formik.touched[name] && formik.errors[name] ? (
      <span className="text-xs font-normal text-red-600">
        {formik.errors[name] as string}
      </span>
    ) : null;

  const inputClass = (name: keyof LeadFormValues) =>
    `h-12 rounded-md border px-4 outline-none focus:border-[#be6b41] ${
      formik.touched[name] && formik.errors[name]
        ? "border-red-500"
        : "border-[#d9cdbb]"
    }`;

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      className="rounded-lg bg-white p-6 text-[#171412] shadow-2xl md:p-8"
    >
      <div className="grid gap-5">
        <h3 className="text-2xl font-semibold">Formulaire de contact</h3>

        <label className="grid gap-2 text-sm font-semibold">
          Nom complet
          <input
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass("fullName")}
          />
          {fieldError("fullName")}
        </label>

        <label className="grid gap-2 text-sm font-semibold">
          Numéro de téléphone
          <input
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass("phone")}
          />
          {fieldError("phone")}
        </label>

        <label className="grid gap-2 text-sm font-semibold">
          Adresse mail
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass("email")}
          />
          {fieldError("email")}
        </label>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-semibold">Votre demande</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {requestChoices.map((choice) => (
              <label
                key={choice}
                className="flex items-start gap-3 rounded-md border border-[#d9cdbb] p-3 text-sm leading-5"
              >
                <input
                  type="checkbox"
                  name="requests"
                  value={choice}
                  checked={formik.values.requests.includes(choice)}
                  onChange={formik.handleChange}
                  className="mt-0.5"
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid gap-2 text-sm font-semibold">
          Un message à nous partager
          <textarea
            rows={4}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`resize-y rounded-md border p-4 outline-none focus:border-[#be6b41] ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-[#d9cdbb]"
            }`}
          />
          {fieldError("message")}
        </label>

        {status === "success" && (
          <p className="rounded-md bg-green-50 p-3 text-sm font-medium text-green-700">
            Votre demande a bien été envoyée. Nous vous répondrons rapidement.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-700">
            {` Une erreur est survenue lors de l'envoi. Veuillez réessayer.`}
          </p>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171412] px-6 text-sm font-bold text-white transition hover:bg-[#be6b41] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formik.isSubmitting ? (
            <>
              Envoi en cours… <Loader2 className="size-4 animate-spin" />
            </>
          ) : (
            <>
              Envoyer ma demande <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
