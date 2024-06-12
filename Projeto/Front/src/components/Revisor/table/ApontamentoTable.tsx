import React, { useContext, useState } from 'react';
import { ApontamentoContext } from '../../../contexts/ApontamentoRevisorContext';

const ApontRevisor: React.FC = () => {
    const context = useContext(ApontamentoContext);

    if (!context) {
        return <div>Error: Context not found</div>;
    }

    const { data, error } = context;

    if (error) {
        return <div>Error: {error}</div>;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        atribuicao: '',
        cidade: '',
        correcao: '',
    });

    const itemsPerPage = 7;
    const filteredData = data.filter(item =>
        (filters.cidade ? item.cidade.toLowerCase().includes(filters.cidade.toLowerCase()) : true) &&
        (filters.atribuicao ? item.atribuicao.toLowerCase().includes(filters.atribuicao.toLowerCase()) : true) &&
        (filters.correcao ? item.correcao.toLowerCase().includes(filters.correcao.toLowerCase()) : true) 

    );
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <>
            <div className="h-screen flex flex-col items-center p-4">

                <p className="text-center, text-xl">Apontamentos</p>
                <p className="text-center">Total de itens: {totalItems}</p>

                <table className="w-6/12 mt-4 border-collapse max-w-full">
                    <thead >
                        <tr className="bg-gray-100 ">
                            <th className="border border-gray-300 p-2">Analista</th>
                            <th className="border border-gray-300 p-2">Cidade</th>
                            <th className="border border-gray-300 p-2">Correção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((row, index) => (
                            <tr key={index} className="border-b border-gray-300 text-center ">
                                <td className="border border-gray-300 px-4 py-2">{row.atribuicao}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.cidade}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.correcao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50 rounded"
                    >
                        Anterior
                    </button>
                    <span className="px-4 py-2 mx-2">Página {currentPage} de {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50 rounded"
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </>
        );
    };
export default ApontRevisor;
