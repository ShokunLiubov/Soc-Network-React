import React from 'react';
import styles from './Paginator.module.css'

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let currentPage = props.currentPage
    let prevPage = currentPage - 1
    let nextPage = currentPage + 1
    let threePage = currentPage + 2
    let lastPage = pagesCount
    let firstPage = 1

    let changeCurrentHandler = (page) => {
        props.onPageChange(page)
    }
    let HTMLLast
    if (lastPage != currentPage && lastPage != currentPage + 1 && lastPage != currentPage + 2) {
        HTMLLast = <span className={`${styles.selectedPage} 
        ${currentPage === lastPage ? styles.selectedPageActive : ''}`}
            onClick={(e) => {
                changeCurrentHandler(lastPage)
            }}>{lastPage}</span>
    }

    let HTMLFirst
    if (firstPage != currentPage && firstPage != currentPage - 1) {
        HTMLFirst = <span className={`${styles.selectedPage} ${currentPage === firstPage ? styles.selectedPageActive : ''}`}
            onClick={(e) => { changeCurrentHandler(firstPage) }}>{firstPage}</span>
    }

    let HTMLThree
    if (currentPage < 2 && lastPage > 2) {
        HTMLThree = <span className={`${styles.selectedPage} 
        ${currentPage === lastPage ? styles.prevNone : ''}
        `}
            onClick={(e) => {
                changeCurrentHandler(threePage)
            }}>{threePage}</span>
    }




    return (
        <nav>
            {pagesCount > 1 &&
                <div className={styles.pageNavbar}>

                    {/* prev button */}
                    <span className={`${styles.navigationButton} ${currentPage === 1 ? styles.navigationPreventNone : ''}`}
                        onClick={(e) => {
                            changeCurrentHandler(prevPage)
                        }}>&laquo;</span>
                    {/* prev button */}

                    {/* first button */}
                    {HTMLFirst}
                    {/* first button */}

                    {/* block buttons */}
                    <span className={`${styles.selectedPage} 
                ${currentPage === 1 ? styles.prevNone : ''}
                `}
                        onClick={(e) => {
                            changeCurrentHandler(prevPage)
                        }}>{prevPage}</span>

                    <span className={`${styles.selectedPage} ${styles.selectedPageActive} `}
                        onClick={(e) => { changeCurrentHandler(currentPage) }}>{currentPage}</span>

                    <span className={`${styles.selectedPage} 
                ${currentPage === lastPage ? styles.prevNone : ''}
                `}
                        onClick={(e) => {
                            changeCurrentHandler(nextPage)
                        }}>{nextPage}</span>

                    {/* three button */}
                    {HTMLThree}
                    {/* {currentPage < 2 &&
                        <span className={`${styles.selectedPage} 
                ${currentPage === lastPage ? styles.prevNone : ''}
                `}
                            onClick={(e) => {
                                changeCurrentHandler(threePage)
                            }}>{threePage}</span>} */}
                    {/* three button */}

                    {/* block buttons */}

                    {/* last button */}
                    {HTMLLast}
                    {/* last button */}

                    {/* next button */}
                    <span className={`${styles.navigationButton} ${currentPage === lastPage ? styles.navigationPreventNone : ''}`} onClick={(e) => {
                        changeCurrentHandler(nextPage)
                    }}>&raquo;</span>
                    {/* next button */}
                </div>}
        </nav>
    )
}

export default Paginator;