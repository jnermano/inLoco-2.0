import React from 'react'
import Place from './Place'

const GlobalFilter = ({places, onPlaceClick, onOpacityChange}) => {


    const handleOpacityChange = (e) => {
        console.log(e.target.value)
        onOpacityChange(e.target.value)
    }

    return (
        <div className="global-filter-container">
            <span> Busca detalhada </span>
            <input type="search" placeholder="Insira o nome da área"/>
            <span> Tipo de seleção </span>
            <form>
                <div className="selectionTypeContainer">
                    <label htmlFor="selectionType1" className="asdasd">
                        <input
                            name="selectionType"
                            type="radio"
                            id="selectionType1"
                            value="demarcada"/>
                        Demarcada
                    </label>
                    <label htmlFor="selectionType2" className="asdasd">
                        <input
                            name="selectionType"
                            type="radio"
                            id="selectionType2"
                            value="isolada"/>
                        Isolada
                    </label>
                </div>
                <label> Opacidade da seleção
                    <input className="opacitySelection" type="range" min="0" max="10" onChange={(e) => handleOpacityChange(e)}></input>
                </label>
            </form>
            <span> Áreas do Rio de Janeiro </span>
            <div className="places">
                {places? places.map(p => <Place onPlaceClick={onPlaceClick} key={p.id} place={p}/>) : null}
            </div>
        </div>
    )
}

export default GlobalFilter
