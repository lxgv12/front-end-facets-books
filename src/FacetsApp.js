import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import EmployeeList from './components/EmployeeList';
import './FacetsApp.css';
import {exampleData} from "./utils/mockData";

const FacetsApp = () => {

    // Variables de estado
    const url = "http://localhost:8088/facets?";
    const [facets, setFacets] = useState({});
    const [employees, setEmployees] = useState([]);
    const [selectedFacets, setSelectedFacets] = useState({});
    const [facetsUrl, setFacetsUrl] = useState(url);
    const [facetsQueryParams] = useState(new URLSearchParams());
    const [page, setPage] = useState(0);

    /**
     * Este hook se ejecuta cuando el componente se monta y cada vez que cambia la variable de estado page o facetsUrl.
     * Se encarga de hacer una petición a la API para obtener los datos de los empleados y las facetas.
     * En caso de error, se muestra un mensaje en la consola y se utilizan los datos de ejemplo.
     */
    useEffect(() => {
        axios.get(`${facetsUrl}&page=${page}`)
            .then(response => {
                setFacets(response.data.aggs);
                setEmployees(prevEmployees => [...prevEmployees, ...response.data.employees]);
            })
            .catch(error => {
                console.error("Error fetching the facets, using example data instead", error);
                setFacets(exampleData.aggs);
                setEmployees(prevEmployees => [...prevEmployees, ...exampleData.employees]);
            });
    }, [facetsUrl, page]);

    /**
     * Este método se encarga de gestionar el cambio de una faceta, cuando se hace click en una de las opciones de la barra lateral.
     * Actualiza varias variables de estado y la URL para hacer la petición a la API con los nuevos parámetros.
     * @param facetKey - Clave de la faceta que ha recibido un cambio.
     * @param facetValue - Valor de la faceta que ha recibido un cambio.
     */
    const handleFacetChange = (facetKey, facetValue) => {

        //Se actualizan las facetas seleccionadas
        setSelectedFacets(prevState => {
            const newState = {...prevState};

            if (newState[facetKey] && newState[facetKey].includes(facetValue)) {
                newState[facetKey] = newState[facetKey].filter(value => value !== facetValue);
            } else {
                newState[facetKey] = newState[facetKey] ? [...newState[facetKey], facetValue] : [facetValue];
            }
            return newState;
        });

        //Si la faceta es de nombre o dirección, se añade directamente a la URL y se reemplaza si ya existía
        if (facetKey === "title" || facetKey === "description") {
            facetsQueryParams.set(facetKey, facetValue);
        }

        //Si actualmente ya se ha seleccionado la faceta, se valora si se quita todo el parametro o una parte, o se incluye
        else {
            if (facetsQueryParams.has(facetKey)) {
                const selectedFacetValues = facetsQueryParams.get(facetKey).split(',');
                let newSelectedFacetValues = [];

                //Se comprueba si el valor seleccionado ya estaba en la lista de valores seleccionados
                if (selectedFacetValues.includes(facetValue)) {
                    if (selectedFacetValues.length === 1) {
                        facetsQueryParams.delete(facetKey);
                    } else {
                        newSelectedFacetValues = selectedFacetValues.filter(value => value !== facetValue);
                    }
                } else {
                    //Se añade el valor seleccionado a la lista de valores seleccionados
                    selectedFacetValues.push(facetValue);
                    newSelectedFacetValues = selectedFacetValues;
                }

                //Si hubiese mas de un valor seleccionado para una faceta, se juntan en un solo string separado por comas
                if (newSelectedFacetValues.length > 0) {
                    facetsQueryParams.set(facetKey, newSelectedFacetValues.join(','));
                }
            } else {

                //Si no se ha seleccionado la faceta previamente, se añade a la lista de parametros
                facetsQueryParams.set(facetKey, facetValue);
            }
        }

        //Se actualizan variables de estado y se resetea el numero de pagina actual y la lista actual de empleados
        setFacetsUrl(url + decodeURIComponent(facetsQueryParams.toString()));
        setPage(0); // Reset page to 0 when facets change
        setEmployees([]); // Clear current employees when facets change
    };

    /**
     * Este método se encarga de cargar más empleados cuando se hace click en el boton de cargar mas.
     * Actualiza la variable de estado page para que se haga una nueva petición a la API con la siguiente página.
     */
    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    // Renderizado del componente
    return (
        <div className="FacetsApp">
            <Sidebar
                facets={facets}
                onFacetChange={handleFacetChange}
                selectedFacets={selectedFacets}
            />
            <EmployeeList employees={employees} loadMore={loadMore} />
        </div>
    );
}

export default FacetsApp;