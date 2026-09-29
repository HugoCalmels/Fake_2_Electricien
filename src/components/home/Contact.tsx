"use client";

import { useMemo, useState } from "react";
import styles from "./Contact.module.css";
import { SITE } from "@/content/site";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

type ErrorState = {
  name: boolean;
  phone: boolean;
  message: boolean;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  message: "",
};

const EMPTY_ERRORS: ErrorState = {
  name: false,
  phone: false,
  message: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<ErrorState>(EMPTY_ERRORS);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [sent, setSent] = useState(false);

  const isReady = useMemo(() => {
    return (
      form.name.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.message.trim() !== ""
    );
  }, [form]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setSent(false);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasTriedSubmit(true);

    const nextErrors: ErrorState = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
      message: form.message.trim() === "",
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    // Site de démo : rien n'est envoyé, on confirme simplement la saisie
    setForm(EMPTY_FORM);
    setErrors(EMPTY_ERRORS);
    setHasTriedSubmit(false);
    setSent(true);
  }

  return (
    <div className={styles.contactWrap}>
      <div className={styles.kv}>Décrivez votre besoin, on vous rappelle sous 48 h avec un devis gratuit.</div>

      <div className={styles.contactLayout}>
        <div className={styles.leftCol}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Appel direct</div>
              <div className={styles.cardDesc}>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </div>
              <div className={styles.smallMuted}>
                {SITE.hours} · {SITE.urgentHours}
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Email</div>
              <div className={styles.cardDesc}>{SITE.email}</div>
              <div className={styles.smallMuted}>Devis / questions</div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Zone</div>
              <div className={styles.cardDesc}>{SITE.zone}</div>
              <div className={styles.smallMuted}>Interventions rapides</div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={handleChange}
                aria-invalid={errors.name}
                className={`${styles.input} ${errors.name ? styles.error : ""}`}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={errors.phone}
                className={`${styles.input} ${errors.phone ? styles.error : ""}`}
              />
            </div>

            <textarea
              name="message"
              placeholder="Votre demande (dépannage, rénovation, installation...)"
              value={form.message}
              onChange={handleChange}
              aria-invalid={errors.message}
              className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
            />

            <div className={styles.formActions}>
              <button
                type="submit"
                aria-disabled={!isReady}
                className={`${styles.submit} ${!isReady ? styles.submitIdle : ""}`}
              >
                Envoyer
              </button>

              {sent ? (
                <p className={styles.success} role="status">
                  Merci ! (Site de démo : aucun message n’a été envoyé.)
                </p>
              ) : null}

              {hasTriedSubmit && !isReady ? (
                <div className={styles.formHint}>
                  Merci de remplir les champs requis.
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <aside className={styles.rightCol}>
          <div className={styles.mapCard}>
            <div className={styles.mapHeader}>
              <div className={styles.cardTitle}>Zone d’intervention</div>
              <div className={styles.smallMuted}>Toulouse et alentours</div>
            </div>

            <div className={styles.map}>
              <iframe
                title="Carte Toulouse"
                src="https://www.google.com/maps?q=Toulouse&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}