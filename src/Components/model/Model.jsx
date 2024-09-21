import React from "react";
import { motion } from "framer-motion";
const Model = ({
    isOpen,
    setIsOpen,
    fields,
    onChange,
    onSubmit,
    title,
    errors,
    onFocus,
}) => {
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            {isOpen && (
                <form
                    noValidate
                    onChange={onChange}
                    onFocus={onFocus}
                    onSubmit={onSubmit}
                >
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Modal content */}

                        <motion.div
                            className="bg-white p-6 rounded-lg w-full max-w-lg"
                            initial={{ y: "-100vh" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100vh" }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <h2 className="text-xl font-semibold mb-4">{title}</h2>

                            {/* Input field */}
                            {fields &&
                                fields.map((item, index) => {
                                    return (
                                        <>
                                            {!item?.isTextArea ? (
                                                <div className="mb-2">
                                                    <input
                                                        key={index}
                                                        type={item.type}
                                                        value={item.value}
                                                        id={item.id}
                                                        name={item.name}
                                                        placeholder={item.placeholder}
                                                        className={`placeholder:text-[8px] focus:shadow-custom-white ${errors[item.name]
                                                            ? "ring-1 ring-red-500 placeholder:text-red-500"
                                                            : "ring-1 ring-gray-500"
                                                            } focus:shadow-gray-400 transition-all ease-in-out duration-300 placeholder:tracking-wide w-full focus:outline-none  font-Poppins text-xs rounded-md border py-2 px-3 bg-white text-black border-none`}
                                                        required={item.isRequired}
                                                    />
                                                    {errors[item.name] && (
                                                        <span className="text-red-500 font-Poppins inline-block text-xs font-normal leading-6 tracking-tight">
                                                            {errors[item.name]}
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <textarea
                                                    key={index}
                                                    type={item.type}
                                                    value={item.value}
                                                    id={item.id}
                                                    name={item.name}
                                                    placeholder={item.placeholder}
                                                    className={`placeholder:text-[8px] h-1/2 focus:shadow-custom-white ${errors[item.name]
                                                        ? "ring-1 ring-red-500 placeholder:text-red-500"
                                                        : "ring-1 ring-gray-500"
                                                        } focus:shadow-gray-400 transition-all ease-in-out duration-300 placeholder:tracking-wide w-full focus:outline-none mb-3  font-Poppins text-xs rounded-md border py-2 px-3 bg-white text-black border-none`}
                                                />
                                            )}
                                        </>
                                    );
                                })}

                            {/* Modal buttons */}
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </form>
            )}
        </React.Fragment>
    );
};

export default Model;
