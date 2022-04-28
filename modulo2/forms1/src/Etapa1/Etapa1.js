import React from "react";
import "../App.css";

export  class Etapa1 extends React.Component {


    render() {

        return (
            <div >
                <h3>
                    ETAPA 1 - DADOS GERAIS
                </h3>
                <div>
                    <p>
                        1. Qual o seu nome?

                    </p>
                    <input></input>
                </div>
                <div>
                    <p>
                        2. Qual sua idade?

                    </p>
                    <input></input>
                </div>
                <div>
                    <p>
                        3. Qual seu email?

                    </p>
                    <input></input>
                </div>
                <div>
                    {<p>
                        4. Qua a sua escolaridade?
                    </p>}
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </div>
               

            </div>

        );
    }
}


