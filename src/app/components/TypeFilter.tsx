'use client';

interface TypeFilterProps {
    onFilter: (type: string) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ onFilter }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilter(event.target.value);
    };

    return (
        <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Filter by Type:</label>
            <select onChange={handleChange} className="p-2 border rounded w-full shadow-md focus:outline-none focus:ring focus:ring-blue-400">
                <option value="">All Types</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="bug">Bug</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                {/* Ajoutez d'autres types ici */}
            </select>
        </div>
    );
};

export default TypeFilter;
