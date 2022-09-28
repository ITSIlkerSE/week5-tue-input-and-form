import React, {ChangeEvent, useState} from "react";


export default function CharacterForm() {

    const [CharacterForm, setCharacterForm] = useState(({

        vorname: "",
        nachname: "",
        alter: 0,
        agb: (true)


    }))


    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        const fieldType = changeEvent.target.type;


        setCharacterForm(
            oldCharacterForm => ({
                ...oldCharacterForm,
                [changeEvent.target.name]:
                    fieldType === "checkbox" ? changeEvent.target.checked
                        : changeEvent.target.value
            })
        )
    }

    console.log(CharacterForm)

    return (
        <div className="">
            <form>
                <label>
                    Vorname:
                    <input
                        name="vorname"
                        placeholder="Vorname :"
                        type="text"
                        value={CharacterForm.vorname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Nachname:
                    <input
                        name="nachname"
                        placeholder="Nachname :"
                        type="text"
                        value={CharacterForm.nachname}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Alter:
                    <input
                        name="alter"
                        placeholder="18"
                        type="Alter :"
                        value={CharacterForm.alter}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Ich habe die AGB gelesen und bin einverstanden:
                    <input
                        name="agb"
                        type="checkbox"
                        checked={CharacterForm.agb}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}
