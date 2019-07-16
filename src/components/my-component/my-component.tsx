import { Component, Method, Prop, Watch, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  /*
  @Prop()
  get wookies(): string
  {
    return 'yes';
  }
  
  set wookies(value:string)
  {
    console.log(value);
  }
  */

  @Prop({reflect: true}) 
  phonetic: SelectOption[] =
  [
    {text: 'Alpha', value: "A"},
    {text: 'Bravo', value: "B"},
    {text: 'Charlie', value: "C"},
    {text: 'Delta', value: "D"},
    {text: 'Echo', value: "E"}
  ];

  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @Prop({ mutable: true }) pList: string[] = ["A", "B"];

  @Method() async addRow(value: string): Promise<void>
  {
    //this.phonetic.push({text: value, value: value.substr(0, 1).toLocaleUpperCase()});
    //this.render();
    this.phonetic = [...this.phonetic, {text: value, value: value.substr(0, 1).toLocaleUpperCase()}];
  }

  @Method() async doShit(): Promise<SelectOption[]>
  {
    return this.phonetic;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }



  render() {
    return <div class="ScheduleBox">
      <div>Hello, World! I'm {this.getText()}</div>

      <select>
        {this.phonetic.map(p => 
          <option value={p.value}>{p.text}</option>
        )}
      </select>
      <br/>
      {this.pList.join(",")}
    </div>;
  }
}

interface SelectOption
{
  text: string;
  value: string;
}