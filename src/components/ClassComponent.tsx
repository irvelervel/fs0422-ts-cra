import { Component } from 'react'

// in here we have to tell TS that this component should receive a prop of subTitle
// every Class Component by default just expects an EMPTY props object {}
// our subTitle needs to be defined in ClassComponent props interface

// what are the props in a Class Component? they are properties in an OBJECT
// so let's define what PROPS are in this class component with an INTERFACE

interface ClassComponentProps {
  subTitle: string
  count: number
}

// the props interface gets linked to the component thanks to the <> type argument
// expressed after the class definition
class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h1>Class TS Component!</h1>
        <h2>{this.props.subTitle}</h2>
        <p>{this.props.count}</p>
      </div>
    )
  }
}

export default ClassComponent
