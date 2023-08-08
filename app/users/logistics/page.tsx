

export default function Page() {
  (( ) => {
	try {
	  //submitEvent.preventDefault()
        //@ts-ignore submitEvent: FormEvent<HTMLFormElement>
        const eventForm: HTMLFormElement = $('#insertForm')[0]
        const FD = new FormData( eventForm )
		console.log(FD)
	
	} catch (error) {
	  console.error(error)	
	}
  })() 
  return (
    <form method="post" action="./logistics" id="insertForm">
      <div className="form-body">
        <div className="form-group">
          <label className="col-md-8 control-label" htmlFor="description">
            描述
          </label>
          <div className="col-md-8 w-4/5">
            <input
              id="description"
              name="description"
              type="text"
              placeholder="please Enter your description here"
              className="form-control input-md w-full"
              required={false}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-8 control-label" htmlFor="name">
            名字
          </label>
          <div className="col-md-8 w-4/5">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="please Enter your name here"
              className="form-control input-md w-full"
              required={false}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-8 control-label" htmlFor="produceDay">
            生产日期
          </label>
          <div className="col-md-8 w-4/5">
            <input
              id="produceDay"
              name="produceDay"
              type="text"
              className="form-control input-md w-full"
              placeholder="please Enter your produceDay, fromat: YYYY-MM-DD HH:MM:SS here"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-8 control-label" htmlFor="shelfLife">
            保质期 (单位： 天)
          </label>
          <div className="col-md-8 w-4/5">
            <input
              id="shelfLife"
              name="shelfLife"
              type="number"
              className="form-control input-md w-full"
              placeholder="保质期"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-8 control-label" htmlFor="standard">
            标准
          </label>
          <div className="col-md-8 w-4/5">
            <input
              id="standard"
              name="standard"
              type="text"
              placeholder="输入相应url"
              className="form-control input-md w-full"
              required={false}
            />
          </div>
          <div className="col-md-8 w-4/5">
            <button>upload</button>
          </div>
          <div id="image-uploader" style={{ height: 300 }}></div>
        </div>
      </div>
      <div className="form-group">
        <input type="submit" />
      </div>
    </form>
  )
}

