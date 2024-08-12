import { CheckBox } from "./components/ui/CheckBox"
import { Input } from "./components/ui/Input"
import { Label } from "./components/ui/Label"
import { SubTitle } from "./components/ui/SubTitle"
import { Textarea } from "./components/ui/TextArea"
import { Title } from "./components/ui/Title"
import { RadioButton } from './components/ui/RadioButton';
import { Select } from "./components/ui/Select"
// import { Switch } from "./components/ui/Switch"
import { FileUpload } from "./components/ui/InputFile"
import { Navbar } from "./components/ui/Navbar"


function App() {
  const navItems = [
    { href: '#', children: 'Link1', current: false },
    { href: '#', children: 'Link2', current: false },
    { href: '#', children: 'Link3', current: true },
  ];

  return (
    <>
      <Navbar
        logoText="Pruebas de componentes"
        tagline="Division por titulo"
        items={navItems}
        navbarClassName="bg-white"
        logoClassName="text-black-500"
        taglineClassName="text-gray-400"
        itemClassName="hover:text-yellow-300"
      />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Title>Prueba de componentes</Title>
        <SubTitle>Input</SubTitle>
        <Input placeholder="Prueba" type="text" name="prueba1" />
        <SubTitle>Label</SubTitle>
        <Label id="prueba">Label</Label>
        <Label textSize="text-lg" fontWeight="font-bold" textColor="text-red-500">Label</Label>
        <SubTitle>TextArea</SubTitle>
        <Textarea placeholder="Prueba" />
        <SubTitle>CheckBox</SubTitle>
        <CheckBox />
        <CheckBox customSize="h-6 w-6" />
        <SubTitle>RadioButton</SubTitle>
        <RadioButton />
        <RadioButton size="h-6 w-6" />
        <SubTitle>Select</SubTitle>
        <Select options={[{value: "1", label: "Option 1"}, {value: "2", label: "Option 2"}]} />
        <Select options={[{value: "1", label: "Option 1"}, {value: "2", label: "Option 2"}]} width="w-1/2" />
        <SubTitle>FileUpload</SubTitle>
        <FileUpload />
      </div>
    </div>
  </>
  )
}

export default App
