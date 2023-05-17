import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";

export const ModalStyle = (Modal.styles = {
	// TODO : Modal창 CSS를 구현합니다.
	content: {
		top: "15%",
		left: "90vw",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		width: "200px",
		height: "183px",
		position: "absolute",
		padding: "0",
		borderRadius: "12px",
		zIndex: "2000",
	},
});
// 모달의 App element 설정
Modal.setAppElement("#root");

function ModalOpen() {
	const [modalVisible, setModalVisible] = useState(false);
	const openModal = () => {
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
	};
	useEffect(() => {
		Modal.setAppElement("#root"); // 모달이 열릴 때 App element 설정
	}, []);
	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			{modalVisible && (
				<Modal
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}
				>x
					<p>이 모달이 어디에 표시 되고 있는 거죠 </p>
				</Modal>
			)}
			
		</>
	);
}

export default ModalOpen;
