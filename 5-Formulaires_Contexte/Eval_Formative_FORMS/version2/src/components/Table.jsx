import React from 'react'

const Table = ({ listeIndividus }) => {
    
    return (
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
                {listeIndividus.map((individu, key) => {
                    return (
                        <tr key={key}>
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
    )
}

export default Table;
