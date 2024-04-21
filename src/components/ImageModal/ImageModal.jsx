import Modal from 'react-modal';
export default function ImageModal({ isOpen, onRequestClose, imageUrl }){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
            ariaHideApp={false}
            style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '90%',
                maxHeight: '90%',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
            }
            }}
        >
            <img src={imageUrl} alt="Large" style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }} />
      </Modal>
    )
}