import React from 'react';
import { Form, Label, Button, Select } from 'semantic-ui-react';

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

const Ligne = ({ label, type, state, cbState, ok, cbSetOk, cbQr, msg }) => {

    const renderInput = (type) => {
        switch (type) {
            case 'date':
            case 'text':
                return <input type={type} onChange={(e) => cbState(e.target.value)} />;
            case 'select':
                return <Select placeholder="Pays" options={optionsPays} onChange={(e, data) => cbState(data.value)}></Select>;
            case 'radio':
                return <>
                    <label>
                        <input type="radio" checked={state === 'Homme'} onChange={() => cbState('Homme')} />
                        &nbsp; Homme
                    </label>
                    <label>
                        <input type="radio" checked={state === 'Femme'} onChange={() => cbState('Femme')} />
                        &nbsp; Femme
                    </label>
                </>
            default: return undefined;
        }
    }
    return (
        <Form.Field>

            <div className="labels">
                <Label pointing="right">{label}</Label>
            </div>

            <div className="inputs">{renderInput(type)}</div>

            <div className="buttons">
                {ok
                    ? undefined
                    : <Button onClick={() => state
                        ? (cbSetOk(), cbQr(), label === "Numéro de passeport"
                            ? alert("Il ne vous reste que 3 questions!")
                            : undefined)
                        : alert(msg)}>Ajouter</Button>}
            </div>

            <hr />

        </Form.Field>
    )
}

export default Ligne;
