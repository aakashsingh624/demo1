import { Modal } from "antd";

export default function ModalCustom(props: {
    modalHeader: string;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    children?: JSX.Element;
}) {
    return (
        <div>
            <Modal
                title={props.modalHeader}
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                footer={null}
            >
                {props.children}
            </Modal>
        </div>
    );
}
