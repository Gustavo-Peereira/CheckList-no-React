import { useState } from "react";
import { List } from "./List";
export function Page() {
    const [tarefa, SetTarefa] = useState('');
    const [list, SetList] = useState([]);

    function PegandoInform(event) {
        // pegando o valor do input
        const inputTarefa = event.target.value;
        SetTarefa(inputTarefa);

    }

    function FazendoLista(event) {
        //Desativando o refresh da pagina
        event.preventDefault();

        //verificando se a task esta vazia
        if (!tarefa) {
            return;
        }
        //atualizando a lista
        SetList([...list, tarefa]);
        SetTarefa('');
    }
    return (
        <div className="page">
            <h1>ToDo list</h1>
            <form onSubmit={FazendoLista} >
                <input
                    type="text"
                    placeholder="adicione tarefa"
                    onChange={PegandoInform}
                    value={tarefa}
                />
                <button type="submit">Adicionar</button>
            </form>

            {/* importando a lista com dados desta pagina */}
            <List list={list} />
    
        </div>
    );
}