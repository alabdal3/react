function Message({ showMessage }) {
    return (
      <div>
        {showMessage ? <p>🤫 Gotch... its still a secret</p> : null}
      </div>
    )
  }
  
  export default Message