import React, { Component } from 'react'
interface Props{
}
interface State{
    name:string,
    age:number,
    loading:boolean,
    count:number
}
export default class ClassComponent extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        // khi khai báo state ở trong component
        this.state={
            name:"hoa",
            age:25,
            loading:true,
            count:0
        }
    }
    componentDidMount(): void {
        console.log("chạy sau khi component được render lần đầu");
        /* 
            phương thức componentDidMount được chạy sau khi component render
            các UI được cập nhật vào DOM
            đây là nơi lí tưởng để thực hiện các việc xử lý như call API lấy dữ liệu
            và hiển thị.
         */
        
    }
    // dùng các phương thức mặc định React cung cấp
    componentWillMount(): void {
        console.log("chạy sau khi constructor khởi tạo xong giá trị state!");
        /* 
            trong phương thức componentWillMount có thể tính toán lại state
            nhưng lưu ý cái thời gian chuyển từ phương thức componentWillMount đến
            phương thức render rất nhanh cho nên lưu ý việc cập nhật state
         */
        
    }
    handleClick=()=>{
        // khi thầy muốn cập nhật state
        this.setState({
            count:this.state.count+1,
        })
    }
    /* 
        Các phương thức cung cấp ở trong giai đoạn updating

     */
    shouldComponentUpdate(): boolean {
        console.log("shouldComponentUpdate được gọi!");
        
        // bắt buộc phải return về true|| fasle
        // nếu không gọi phương thức ra thì mặc định phương thức trả về true
        return false
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log("component willupdate được gọi!");
        
    }
   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log("componentDidUpdate được gọi", );
        
    }
    render() {
    console.log("component được re-render : render lại");
    
    /* 
        this.setState({
            name:"hồng"
        })
     */
    // console.log("component được render lần đầu");
    
    return (
      <div>
      <p>  ClassComponent</p>
      <p> xin chào {this.state.name}</p>
      <p>giá trị count:{this.state.count}</p>
      <button onClick={this.handleClick}>thay đổi state </button>

      </div>
    )
  }
}