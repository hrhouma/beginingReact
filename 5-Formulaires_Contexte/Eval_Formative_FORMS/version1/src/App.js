import React, { useState } from 'react';
import { Button, Form, Select, Label } from "semantic-ui-react";

const optionsPays = [
  { value: "Canada", key: "Canada", text: "Canada" },
  { value: "Etas Unis", key: "Etas Unis", text: "Etas Unis" },
  { value: "Mexique", key: "Mexique", text: "Mexique" },
  { value: "Uganda", key: "Uganda", text: "Uganda" },
  { value: "Chine", key: "Chine", text: "Chine" },
  { value: "Japon", key: "Japon", text: "Japon" },
  { value: "Algérie", key: "Algérie", text: "Algérie" },
  { value: "Australie", key: "Australie", text: "Australie" },

];

function App() {

  const [listeIndividus, setListeIndividus] = useState([]);

  const [qR, setQr] = useState(11);

  const [genre, setGenre] = useState('');
  const [genreOk, setGenreOk] = useState(false);

  const [nom, setNom] = useState('');
  const [nomOk, setNomOk] = useState(false);

  const [prenom, setPrenom] = useState('');
  const [prenomOk, setPrenomOk] = useState(false);

  const [naissance, setNaissance] = useState('');
  const [naissanceOk, setNaissanceOk] = useState(false);

  const [ville, setVille] = useState('');
  const [villeOk, setVilleOk] = useState(false);

  const [pays, setPays] = useState('');
  const [paysOk, setPaysOk] = useState(false);

  const [nationalite, setNationalite] = useState('');
  const [nationaliteOk, setNationaliteOk] = useState(false);

  const [passeport, setPasseport] = useState('');
  const [passeportOk, setPasseportOk] = useState(false);

  const [paysAvant, setPaysAvant] = useState('');
  const [paysAvantOk, setPaysAvantOk] = useState(false);

  const [datePasseport, setDatePasseport] = useState('');
  const [datePasseportOk, setDatePasseportOk] = useState(false);

  const [dateExpiration, setDateExpiration] = useState('');
  const [dateExpirationOk, setDateExpirationOk] = useState(false);

  const onAjouterIndividu = () => {
    const newListeIndividus = [...listeIndividus,
      { genre, nom, prenom, naissance, ville, pays, nationalite, passeport, paysAvant, datePasseport, dateExpiration}];
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
      <h1>Evaluation Formative 1</h1>
      <h2>Haythem REHOUMA</h2>
      <h3>Formulaires</h3>
      <Form className="formulaire">

        
        <Form.Field>
          <div className="labels">
            <Label pointing="right">Genre</Label>
          </div>
          <div className="inputs">
            <input type="radio" checked={genre === 'homme'} name="genre" id="homme" onChange={() => setGenre('homme')} />
            <label>Homme</label>
            <input type="radio" checked={genre === 'femme'}name="genre" id="femme" onChange={() => setGenre('femme')} />
            <label>Femme</label>
          </div>
          <div className="buttons">
            {genreOk? undefined:<Button onClick={() => genre ? (setGenreOk(true), setQr(qR-1)):alert("Genre requis!")}>Ajouter</Button>}
          </div>
        </Form.Field>

        {genreOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Nom de famille</Label>
            </div>
            <div className="inputs">
              <input type="text" onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className="buttons">
              {nomOk ? undefined : <Button onClick={() => nom ? (setNomOk(true), setQr(qR-1)) : alert("Nom requis!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {nomOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Prénom</Label>
            </div>
            <div className="inputs">
              <input type="text" onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <div className="buttons">
              {prenomOk ? undefined :<Button onClick={() => prenom ? (setPrenomOk(true), setQr(qR-1)) : alert("Prénom requis!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {prenomOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Date de naissance</Label>
            </div>
            <div className="inputs">
              <input type="date" onChange={(e) => setNaissance(e.target.value)} />
            </div>
            <div className="buttons">
              {naissanceOk ? undefined :<Button onClick={() => naissance ? (setNaissanceOk(true), setQr(qR-1)) : alert("Date de naissance requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {naissanceOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Ville de naissance</Label>
            </div>
            <div className="inputs">
              <input type="text" onChange={(e) => setVille(e.target.value)} />
            </div>
            <div className="buttons">
              {villeOk ? undefined :<Button onClick={() => ville ? (setVilleOk(true), setQr(qR-1)) : alert("Ville de naissance requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {villeOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Pays de naissance</Label>
            </div>
            <div className="inputs">
              <Select placeholder="Catégorie" options={optionsPays} onChange={(e, data) => setPays(data.value)}></Select>
            </div>
            <div className="buttons">
              {paysOk ? undefined :<Button onClick={() => pays ? (setPaysOk(true), setQr(qR-1)) : alert("Pays de naissance requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {paysOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Nationalité</Label>
            </div>
            <div className="inputs">
              <Select placeholder="Catégorie" options={optionsPays} onChange={(e, data) => setNationalite(data.value)}></Select>
            </div>
            <div className="buttons">
              {nationaliteOk ? undefined :<Button onClick={() => nationalite ? (setNationaliteOk(true), setQr(qR-1)) : alert("Nationalité requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {nationaliteOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Numéro de passeport</Label>
            </div>
            <div className="inputs">
              <input type="text" onChange={(e) => setPasseport(e.target.value)} />
            </div>
            <div className="buttons">
              {passeportOk ? undefined :<Button onClick={() => passeport ? (setPasseportOk(true), setQr(qR-1), alert("Il ne vous reste que 3 questions!")) : alert("Numéro de passeport!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {passeportOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Pays ayant délivré le passeport</Label>
            </div>
            <div className="inputs">
              <Select placeholder="Catégorie" options={optionsPays} onChange={(e, data) => setPaysAvant(data.value)}></Select>
            </div>
            <div className="buttons">
              {paysAvantOk ? undefined :<Button onClick={() => paysAvant ? (setPaysAvantOk(true), setQr(qR-1)) : alert("Pays ayant livré le passeport requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {paysAvantOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Date de délivrance du passeport</Label>
            </div>
            <div className="inputs">
              <input type="date" onChange={(e) => setDatePasseport(e.target.value)} />
            </div>
            <div className="buttons">
              {datePasseportOk ? undefined :<Button onClick={() => datePasseport ? (setDatePasseportOk(true), setQr(qR-1)) : alert("Date de délivrance du passeport requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}

        {datePasseportOk ?
          <Form.Field>
            <div className="labels">
              <Label pointing="right">Date d'expiration du passeport</Label>
            </div>
            <div className="inputs">
              <input type="date" onChange={(e) => setDateExpiration(e.target.value)} />
            </div>
            <div className="buttons">
              {dateExpirationOk? undefined:<Button onClick={() => dateExpiration ? (setDateExpirationOk(true), setQr(qR-1)) : alert("Date d'expiration du passeport requise!")}>Ajouter</Button>}
            </div>
          </Form.Field> : undefined}
        
        {dateExpirationOk ?
          <Button onClick={onAjouterIndividu}>Ajouter à la liste</Button> : undefined}
          <h4>Il vous reste {qR} questions!</h4>
      </Form>
      <table>
        <caption><h2>Liste des ajouts</h2></caption>
        <thead>
          <tr>
            <th>Genre</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Naissance</th>
            <th>Ville</th>
            <th>Pays</th>
            <th>Nationalite</th>
            <th>Passeport</th>
            <th>Origine</th>
            <th>Date Passeport</th>
            <th>Expiration Passeport</th>
          </tr>
        </thead>
        <tbody>
          {listeIndividus.map((individu, i) => {
            return (
              <tr>
                <td>{individu.genre}</td>
                <td>{individu.nom}</td>
                <td>{individu.prenom}</td>
                <td>{individu.naissance}</td>
                <td>{individu.ville}</td>
                <td>{individu.pays}</td>
                <td>{individu.nationalite}</td>
                <td>{individu.passeport}</td>
                <td>{individu.paysAvant}</td>
                <td>{individu.datePasseport}</td>
                <td>{individu.dateExpiration}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
