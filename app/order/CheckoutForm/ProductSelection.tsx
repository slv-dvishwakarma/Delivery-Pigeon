import { useState } from 'react';
import Select from 'react-select';
import { RxCross2 } from 'react-icons/rx';

export const ProductSelection = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const options = [
        { value: 'Cooked Food', label: 'Cooked Food' },
        { value: 'Uncooked Food', label: 'Uncooked Food' },
        { value: 'Documents', label: 'Documents' },
        { value: 'Medicines', label: 'Medicines' },
        { value: 'Gifts', label: 'Gifts' },
        { value: 'Clothes', label: 'Clothes' },
        { value: 'Groceries', label: 'Groceries' },
        { value: 'Parcel & more', label: 'Parcel & more' }
    ];

    const handleSelectChange = (selectedOptions: any) => {
        setSelectedItems(selectedOptions.map((option: any) => option.value));
    };

    return (
        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
            <div className="orderSection">
                <div className="pickupForm">
                    <div className="selectProduct mt-4">
                        <p>What are you sending</p>
                        <Select
                            isMulti
                            options={options}
                            onChange={handleSelectChange}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className="form-group mt-5 mb-2">
                        <label className='text-md'>Select Package Weight</label>
                        <select className="form-control w-full h-[calc(46px_+_2px)] text-base leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 rounded-lg border-solid border-[#ced4da] mt-3" name="weight" required={true} >
                            <option value="2">0KG to 2KG</option>
                            <option value="4">2KG to 4KG</option>
                            <option value="6">4KG to 6KG</option>
                            <option value="8">6KG to 8KG</option>
                            <option value="10">8KG to 10KG</option>
                            <option value="12">10KG to 12KG</option>
                            <option value="14">12KG to 14KG</option>
                            <option value="16">14KG to 16KG</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSelection;
