// Complete.jsx
import React from "react";
import styles from "./Complete.module.css";

function Complete({ completedTodos }) {
  return (
    <div className={styles.completeContainer}>
      <h2 className={styles.completeHeading}>Completed Todos</h2>
      <ul className={styles.completeList}>
        {completedTodos.map((todo) => (
          <li key={todo.id} className={styles.completeItem}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Complete;
