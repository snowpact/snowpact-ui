import type { Meta } from '@storybook/react/types-6-0';
import { FaSnowflake } from 'react-icons/fa';
import { Pricing } from '.';

export default {
  title: 'Components/molecules/Pricing',
  component: Pricing
} as Meta;

export const Default = (): JSX.Element => (
  <Pricing>
    <Pricing.Card
      icon={<FaSnowflake size="full" />}
      details={[
        'Hébergement',
        '1 adresses mail personnalisée',
        'Maintenance',
        'Haute disponibilité',
        'SEO Optimisé (technique)',
        'Nom de domaine',
        'Blog',
        'Interface de mise à jour de contenu',
        'Rapport analytics mensuel',
        'Formulaire de contact',
        'Formation utilisateur'
      ]}
      title="Présense en ligne"
      priceValue="47€"
      priceFrequency=" / mois"
    >
      <button className="rounded bg-primary-500 text-xl font-semibold text-white">Let's go</button>
    </Pricing.Card>
    <Pricing.Card
      details={[
        '+ Toutes les offres dans l\'offre "Présence en ligne"',
        '5 adresses mails personnalisées',
        'Assistance',
        'Rédaction des pages SEO optimisés avec keyword',
        'Audit SEO (1 fois par an)',
        "Mise en place d'une stratégie éditorial (1 fois par an)",
        'Rédaction page Google My Business',
        'Traffic en continu sur votre site (campagne publicité SEA)',
        'Formation SEO'
      ]}
      icon={<FaSnowflake size="full" />}
      title="Impact en ligne"
      priceValue="97€"
      priceFrequency=" / mois"
      main
    >
      <button className="rounded bg-white text-xl font-semibold text-primary-500">Let's go</button>
    </Pricing.Card>
    <Pricing.Card
      details={[
        '+ Toutes les offres dans l\'offre "Impact en ligne"',
        'Audit / Création d’un logo',
        'Vidéos Promotionnel (1 fois par an)',
        'Shooting Photo (1 fois par an)',
        'Audit complet SEO (3 fois par an)',
        "Mise en place d'une stratégie éditorial (3 fois par an)",
        'Rédaction contenu (2 articles par mois)',
        'Liste d’articles pour les 4 prochains mois',
        'Traffic boosté en continu sur votre site (campagne publicité SEA)',
        'Formation réseaux sociaux',
        'Accès à une plateforme centralisée de gestion des réseaux sociaux',
        'Rédactions de contenus (2 par mois)',
        'Google workspace'
      ]}
      icon={<FaSnowflake size="full" />}
      title="VIP"
      priceValue="587€"
      priceFrequency=" / mois"
    >
      <button className="rounded bg-primary-500 text-xl font-semibold text-white">Let's go</button>
    </Pricing.Card>
  </Pricing>
);
