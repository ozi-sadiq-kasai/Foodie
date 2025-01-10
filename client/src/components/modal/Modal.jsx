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

        {/* Meal Header */}
        <h2>{meal.header}</h2>

        {/* Meal Image */}
        <img src={meal.image} alt={meal.header} className={styles.modalImage} />

        {/* Ingredients */}
        <h3>Ingredients:</h3>
        <div style={{border:'1px solid red',display:'flex'}}>

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
        {/* Another button for additional actions */}
        <button className={styles['wrapper__button']}>Another Action</button>
      </div>
    </div>
  );
};

export default Modal;
