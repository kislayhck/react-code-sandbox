import { useEffect, useState } from "react";

const DataGrid = ({ users }) => {
    const [defaultUsers, setDefaultUsers] = useState([]);
    const [pageValue, setPageValue] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(users.length / pageValue);

    const getPagedBased = (page, pageSize) => {
        const startIndex = (page - 1) * pageSize;
        const data = users.slice(startIndex, startIndex + pageSize);
        setDefaultUsers(data);
    };

    useEffect(() => {
        getPagedBased(currentPage, pageValue);
    }, [users, currentPage, pageValue]);

    const changePageValue = (value) => {
        const newPageSize = parseInt(value, 10);
        setPageValue(newPageSize);
        setCurrentPage(1); // Reset to first page
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            {[
                                { label: 'ID', key: 'id' },
                                { label: 'Name', key: 'name' },
                                { label: 'Age', key: 'age' },
                                { label: 'Occupation', key: 'occupation' },
                            ].map(({ label, key }) => (
                                <th key={key}>{label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {defaultUsers.map(({ id, name, age, occupation }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{occupation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <label>Rows per page: </label>
                    <select onChange={(e) => changePageValue(e.target.value)} value={pageValue}>
                        <option value={5}>Show 5</option>
                        <option value={10}>Show 10</option>
                        <option value={20}>Show 20</option>
                    </select>
                </div>
                <div>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        Prev
                    </button>
                    Page {currentPage} of {totalPages}
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default DataGrid;
