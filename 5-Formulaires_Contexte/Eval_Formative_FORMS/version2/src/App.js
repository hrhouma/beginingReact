import React, { useState } from 'react';
import { Button, Form } from "semantic-ui-react";
import Ligne from './components/Ligne';
import Table from './components/Table';

function App() {

  const [listeIndividus, setListeIndividus] = useState([]);

  const [qR, setQr] = useState(11);
  const cbQr = () => { setQr(qR - 1) }

  const [genre, setGenre] = useState('');
  const [genreOk, setGenreOk] = useState(false);
  const cbGenre = (value) => { setGenre(value) }
  const cbGenreOk = () => { setGenreOk(!nomOk) }

  const [nom, setNom] = useState('');
  const [nomOk, setNomOk] = useState(false);
  const cbNom = (value) => { setNom(value) }
  const cbNomOk = () => { setNomOk(!nomOk) }

  const [prenom, setPrenom] = useState('');
  const [prenomOk, setPrenomOk] = useState(false);
  const cbPrenom = (value) => { setPrenom(value) }
  const cbPrenomOk = () => { setPrenomOk(!prenomOk) }

  const [naissance, setNaissance] = useState('');
  const [naissanceOk, setNaissanceOk] = useState(false);
  const cbNaissance = (value) => { setNaissance(value) }
  const cbNaissanceOk = () => { setNaissanceOk(!naissanceOk) }

  const [ville, setVille] = useState('');
  const [villeOk, setVilleOk] = useState(false);
  const cbVille = (value) => { setVille(value) }
  const cbVilleOk = () => { setVilleOk(!villeOk) }

  const [pays, setPays] = useState('');
  const [paysOk, setPaysOk] = useState(false);
  const cbPays = (value) => { setPays(value) }
  const cbPaysOk = () => { setPaysOk(!paysOk) }

  const [nationalite, setNationalite] = useState('');
  const [nationaliteOk, setNationaliteOk] = useState(false);
  const cbNationalite = (value) => { setNationalite(value) }
  const cbNationaliteOk = () => { setNationaliteOk(!nationaliteOk) }

  const [passeport, setPasseport] = useState('');
  const [passeportOk, setPasseportOk] = useState(false);
  const cbPasseport = (value) => { setPasseport(value) }
  const cbPasseportOk = () => { setPasseportOk(!passeportOk) }

  const [paysAvant, setPaysAvant] = useState('');
  const [paysAvantOk, setPaysAvantOk] = useState(false);
  const cbPaysAvant = (value) => { setPaysAvant(value) }
  const cbPaysAvantOk = () => { setPaysAvantOk(!paysAvantOk) }

  const [datePasseport, setDatePasseport] = useState('');
  const [datePasseportOk, setDatePasseportOk] = useState(false);
  const cbDatePasseport = (value) => { setDatePasseport(value) }
  const cbDatePasseportOk = () => { setDatePasseportOk(!datePasseportOk) }

  const [dateExpiration, setDateExpiration] = useState('');
  const [dateExpirationOk, setDateExpirationOk] = useState(false);
  const cbDateExpiration = (value) => { setDateExpiration(value) }
  const cbDateExpirationOk = () => { setDateExpirationOk(!dateExpirationOk) }

  const onAjouterIndividu = () => {
    const newListeIndividus = [...listeIndividus,
    { genre, nom, prenom, naissance, ville, pays, nationalite, passeport, paysAvant, datePasseport, dateExpiration }];
    setListeIndividus(newListeIndividus);
    setGenre('');
    setNom('');
    setPrenom('');
    setNaissance('');
    setVille('');
    setPays('');
    setNationalite('');
    setPasseport('');
    setPaysAvant('');
    setDatePasseport('');
    setDateExpiration('');
    setGenreOk(false);
    setNomOk(false);
    setPrenomOk(false);
    setNaissanceOk(false);
    setVilleOk(false);
    setPaysOk(false);
    setNationaliteOk(false);
    setPasseportOk(false);
    setPaysAvantOk(false);
    setDatePasseportOk(false);
    setDateExpirationOk(false);
    setQr(11);
  }

  return (
    <div className="App">
      <h1>Evaluation Formative </h1>
      <h2>Haythem REHOUMA</h2>

      <Form className="formulaire">

        <Ligne label="Genre" type="radio" state={genre} cbState={cbGenre} ok={genreOk} cbSetOk={cbGenreOk} cbQr={cbQr}  msg="Genre requis!" />

        {genreOk &&
          <Ligne label="Nom" type="text" state={nom} cbState={cbNom} ok={nomOk} cbSetOk={cbNomOk} cbQr={cbQr} msg="Nom requis!" />}

        {nomOk &&
          <Ligne label="Prénom" type="text" state={prenom} cbState={cbPrenom} ok={prenomOk} cbSetOk={cbPrenomOk} cbQr={cbQr} msg="Prénom requis!" />}

        {prenomOk &&
          <Ligne label="Date de naissance" type="date" state={naissance} cbState={cbNaissance} ok={naissanceOk} cbSetOk={cbNaissanceOk} cbQr={cbQr} msg="Date de naissance requise!" />}

        {naissanceOk &&
          <Ligne label="Ville de naissance" type="text" state={ville} cbState={cbVille} ok={villeOk} cbSetOk={cbVilleOk} cbQr={cbQr} msg="Ville de naîssance requise!" />}

        {villeOk &&
          <Ligne label="Pays de naissance" type="select" state={pays} cbState={cbPays} ok={paysOk} cbSetOk={cbPaysOk} cbQr={cbQr} msg="Pays de naissance requise!" />}

        {paysOk &&
          <Ligne label="Nationalité" type="select" state={nationalite} cbState={cbNationalite} ok={nationaliteOk} cbSetOk={cbNationaliteOk} cbQr={cbQr} msg="Nationalité requise!" />}

        {nationaliteOk &&
          <Ligne label="Numéro de passeport" type="text" state={passeport} cbState={cbPasseport} ok={passeportOk} cbSetOk={cbPasseportOk} cbQr={cbQr} msg="Numéro de passeport requis!" />}

        {passeportOk &&
          <Ligne label="Pays ayant délivré le passeport" type="select" state={paysAvant} cbState={cbPaysAvant} ok={paysAvantOk} cbSetOk={cbPaysAvantOk} cbQr={cbQr} msg="Pays ayant livré le passeport requis!" />}

        {paysAvantOk &&
          <Ligne label="Date de délivrance du passeport" type="date" state={datePasseport} cbState={cbDatePasseport} ok={datePasseportOk} cbSetOk={cbDatePasseportOk} cbQr={cbQr} msg="Date de délivrance du passeport requise!" />}

        {datePasseportOk &&
          <Ligne label="Date d'expiration du passeport" type="date" state={dateExpiration} cbState={cbDateExpiration} ok={dateExpirationOk} cbSetOk={cbDateExpirationOk} cbQr={cbQr} msg="Date d'expiration du passeport requise!" />}

        {dateExpirationOk ?
          <Button onClick={onAjouterIndividu}>Ajouter à la liste</Button> : undefined}

        <h4>Il vous reste {qR} questions!</h4>
      </Form>
      {listeIndividus.length > 0 && <Table listeIndividus={listeIndividus} />}

    </div>
  );
}

export default App;
