import React from 'react'
import styles from '@/styles/about/PDF.module.scss'


function PDF() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../pdf/resume_.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '../pdf/resume_.pdf';
                alink.click();
            })
        })
    }

  return (
    <button className={styles.btn}>
        <span onClick={onButtonClick}>
            이력서 보러가기
        </span>
    </button>
  )
}

export default PDF