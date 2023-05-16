import { useState } from "react"
import { Link } from "react-router-dom";
import { styled } from "styled-components";





function ModalOpen() {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
<></>
    );
}

export default ModalOpen;
