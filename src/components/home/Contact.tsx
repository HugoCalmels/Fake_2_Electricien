"use client";

import { useMemo, useState } from "react";
import styles from "./Contact.module.css";

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

    setForm(EMPTY_FORM);
    setErrors(EMPTY_ERRORS);
    setHasTriedSubmit(false);
  }

  return (
    <div className={styles.contactWrap}>
      <div className={styles.kv}>Décrivez votre besoin — réponse rapide.</div>

      <div className={styles.contactLayout}>
        <div className={styles.leftCol}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Appel direct</div>
              <div className={styles.cardDesc}>06 52 35 37 96</div>
              <div className={styles.smallMuted}>Lun–Sam 8h–19h</div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Email</div>
              <div className={styles.cardDesc}>contact@exemple.fr</div>
              <div className={styles.smallMuted}>Devis / questions</div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Zone</div>
              <div className={styles.cardDesc}>Toulouse + périphérie</div>
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