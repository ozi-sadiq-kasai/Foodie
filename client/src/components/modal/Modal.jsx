import styles from './Modal.module.scss';

const Modal = ({ meal, onClose }) => {
  if (!meal.header) return null; // If no meal header is passed, don't render the modal

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {/* Close button */}
        <button onClick={onClose} className={styles.closebutton}>
          X
        </button>
        {/* Meal Image */}
        <img src={meal.image} alt={meal.header} className={styles.modalImage} />
        {/* Meal Header */}
        <h2>{meal.header}</h2>
        {/* Ingredients */}
        <h3>Ingredients:</h3>
        <div className={styles.ingredients}>
          <ul>
            {meal.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <ul>
            {meal.measures?.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <h3>Instructions:</h3>
        <p>{meal.instructions}</p>
      </div>
    </div>
  );
};

export default Modal;
