import { useState, useEffect } from "react";
import axios from "axios"; 
import { toast } from "react-toastify";

const BomComponent = () => {
    const [inputState, setInputState] = useState({
        machineName: '',
        invoiceNumber: '',
        numParts: 0,
        parts: [],
        boms: [],
        selectedBom: null
    });

    const { machineName, invoiceNumber, numParts, parts, boms, selectedBom } = inputState;

    const handleChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        });
    };

    const handlePartChange = (index, event) => {
        const values = [...parts];
        values[index][event.target.name] = event.target.value;
        setInputState({
            ...inputState,
            parts: values
        });
    };

    const handleNumPartsChange = (event) => {
        setInputState({
            ...inputState,
            numParts: event.target.value,
            parts: Array.from({ length: event.target.value }, () => ({ partName: '', quantity: '' }))
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBom({ machineName, invoiceNumber, parts });
    };

    useEffect(() => {
        fetchBoms();
    }, []);

    const fetchBoms = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/getbom');
            setInputState({
                ...inputState,
                boms: response.data
            });
        } catch (error) {
            console.error('Error fetching BOMs', error);
        }
    };

    const createBom = async (bomData) => {
        try {
            const response = await axios.post('http://localhost:8000/api/bom', bomData);
            toast.success("BOM created successfully");
            console.log('BOM created', response.data);
            fetchBoms();
        } catch (error) {
            toast.error(error.message);
            console.error('Error creating BOM', error);
        }
    };

    return (
        <div className='w-full h-full flex flex-col justify-start items-start'>
            <h1 className='text-sm font-bold w-full p-2'>BOM</h1>
            <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
                <div className='border-2 border-gray ml-2 w-5/6 shadow-md'></div>
                <h1 className='text-sm font-semibold p-2'>BOM Details</h1>
                <div className='w-full h-full p-2'>
                    <form onSubmit={handleSubmit} className="grid items-end gap-6 mb-6 md:grid-cols-3 w-5/6">
                        <div className="relative">
                            <input required onChange={handleChange} name='machineName' value={machineName} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Machine Name</label>
                        </div>
                        <div className="relative">
                            <input required onChange={handleChange} name='invoiceNumber' value={invoiceNumber} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Invoice Number</label>
                        </div>
                        <div className="relative">
                            <input required onChange={handleNumPartsChange} name='numParts' value={numParts} type="number" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Number of Parts</label>
                        </div>
                        <div className="relative md:col-span-3 w-full">
                        {parts.map((part, index) => (
                            <div key={index} className="flex flex-row justify-center items-center gap-6 mt-4">
                                <div className="relative">
                                    <input required onChange={(e) => handlePartChange(index, e)} name='partName' value={part.partName} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Part Name</label>
                                </div>
                                <div className="relative">
                                    <input required onChange={(e) => handlePartChange(index, e)} name='quantity' value={part.quantity} type="number" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Quantity</label>
                                </div>
                                <div className="relative">
                                    <input required onChange={(e) => handlePartChange(index, e)} name='invoiceAmount' value={part.invoiceAmount} type="text" id="small_outlined" className="cursor-pointer shadow-md block px-2.5 pb-1.5 pt-3 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label for="small_outlined" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Price</label>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center md:col-span-3 mt-4"> {/* This div will now occupy all columns on medium and above screens */}
                         <button type="submit" className="bg-sky-500 text-white rounded-lg px-6 py-2 text-xs mr-4">Add BOM</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BomComponent;
