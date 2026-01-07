import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/macaron/Layout';

export default function MacaronPolitiqueConfidentialite() {
  return (
    <Layout currentPageName="PolitiqueConfidentialite">
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-rose-400 text-sm tracking-widest uppercase">Informations légales</span>
            <h1
              className="text-4xl md:text-5xl font-light text-gray-800 mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Politique de <span className="italic text-rose-500">confidentialité</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-6 rounded-full" />
            <p className="text-gray-500 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg shadow-rose-100 p-8 md:p-10 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">1. Responsable du traitement</h2>
              <p>
                Le site <strong>Macaron Royal</strong> est responsable du traitement de vos données personnelles.
              </p>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-rose-100 p-4 bg-rose-50/40">
                  <p className="font-semibold text-gray-800">Adresse</p>
                  <p>Azito Palace</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
                <div className="rounded-2xl border border-rose-100 p-4 bg-rose-50/40">
                  <p className="font-semibold text-gray-800">Contact</p>
                  <p>Téléphone : +225 07 00 89 86 86</p>
                  <p>Email : contact@macaronroyal.fr</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">2. Données collectées</h2>
              <p>Nous pouvons collecter les données suivantes lorsque vous utilisez le site :</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Informations de contact (nom, numéro de téléphone, adresse email) lorsque vous nous contactez.</li>
                <li>Informations de commande et de réservation (produits, quantités, messages).</li>
                <li>Données techniques (adresse IP, type d’appareil, navigateur) à des fins de sécurité et d’amélioration.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">3. Finalités (pourquoi nous utilisons vos données)</h2>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Répondre à vos demandes via le formulaire de contact.</li>
                <li>Gérer vos réservations et commandes.</li>
                <li>Améliorer l’expérience utilisateur et la sécurité du site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">4. Base légale</h2>
              <p>
                Le traitement est fondé sur votre consentement (formulaires) et/ou sur l’exécution d’une demande
                (réservation/commande) ainsi que sur notre intérêt légitime (sécurité, amélioration du service).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">5. Partage des données</h2>
              <p>
                Nous ne vendons pas vos données. Elles peuvent être partagées uniquement avec des prestataires
                nécessaires au fonctionnement du service (hébergement, outils techniques) et uniquement dans la mesure
                nécessaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">6. Durée de conservation</h2>
              <p>
                Nous conservons vos données le temps nécessaire au traitement de votre demande, puis pendant une durée
                raisonnable à des fins de suivi et obligations légales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">7. Vos droits</h2>
              <p>Vous pouvez demander :</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>L’accès à vos données</li>
                <li>La rectification</li>
                <li>La suppression</li>
                <li>La limitation ou l’opposition au traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer vos droits, contactez-nous via : <strong>+225 07 00 89 86 86</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">8. Cookies</h2>
              <p>
                Le site peut utiliser des cookies techniques nécessaires au bon fonctionnement. Si des cookies
                supplémentaires sont utilisés (mesure d’audience, etc.), nous afficherons une information dédiée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-800 mb-3">9. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre
                l’accès non autorisé, la perte ou l’altération.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
