import styles from "./todoAdd.module.css"
function todoAdd(){
    return <div className="container text-center">
    <div className="row">
      <div className="col-5"><input className={`${styles['input']}`} type="text" placeholder="Enter to do here"/></div>
      <div className="col-4"><input className={`${styles['input']}`} type="date" /></div>
      <div className="col-2"><button type="button" className="btn btn-success myBtn">ADD</button></div>
    </div>
    </div>
}

export default todoAdd;