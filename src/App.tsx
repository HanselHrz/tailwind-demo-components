import {
  Accordion,
  Select,
  RadioButton,
  Navbar,
  FileUpload,
  // Title,
  Textarea,
  SubTitle,
  Label,
  CheckBox,
  Input,
  Alert,
  Button,
  Carousel,
  Divider,
  Dropdown,
  Image,
  List,
  Pagination,
  Spinner,
  Table,
  Video,
  Content,
  Section,
  Card,
  Modal,
  Sidebar,
  SidebarItem
} from "../src/components/index";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";


function App() {
  const navItems = [
    { href: '#', children: 'Link1', current: false, className: 'text-red-500' },
    { href: '#', children: 'Link2', current: false, className: 'text-green-500' },
    { href: '#', children: 'Link3', current: true, className: 'text-blue-500' },
  ];
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Content className="space-y-8">
      {/* Accordion Section */}
      <Section title="Accordion Component">
        <Accordion title="Click to expand">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            commodi molestias natus culpa temporibus qui, repellendus quos
            delectus sequi laboriosam officiis porro corporis minus ipsa
            officia? Corrupti maxime quae in? Hic dolores sit veritatis
            molestiae aliquam nostrum repellat eveniet perferendis nesciunt
            vitae architecto similique id ea nam, error, mollitia sequi eligendi
            officiis assumenda dolore laboriosam eius cum sapiente? Ab,
            blanditiis. Necessitatibus voluptatem aspernatur commodi quo ea iste
            temporibus praesentium sunt, tempora laborum. Illum dolores
            consequatur ipsa id ducimus explicabo, fugiat enim, nesciunt est
            provident nostrum cumque praesentium sint natus rem. Iure quos
            officiis ipsam modi optio illum temporibus minima, deleniti,
            deserunt commodi totam! Delectus ea tempora sed architecto earum
            quae officia? Ullam aspernatur fugiat sunt non, magnam soluta.
            Officiis, nemo? Maiores omnis ducimus dicta facere perferendis? Amet
            optio, delectus inventore doloribus numquam recusandae quo natus
            tempore ex sed animi reprehenderit excepturi, cupiditate aspernatur
            adipisci sit consectetur, cumque assumenda vero odit?
          </p>
        </Accordion>
      </Section>

      {/* Alerts Section */}
      <Section title="Alert Components">
        <Content className="space-y-4">
          <Alert message="This is an informational alert." variant="info" />
          <Alert message="This is a warning alert." variant="warning" />
          <Alert message="This is a danger alert." variant="danger" />
        </Content>
      </Section>

      {/* Buttons Section */}
      <Section title="Button Components">
        <Content className="space-x-4">
          <Button
            label="Primary Button"
            variant="primary"
            size="medium"
            onClick={() => alert("Primary Button Clicked!")}
          />
          <Button
            label="Secondary Button"
            variant="secondary"
            size="large"
            onClick={() => alert("Secondary Button Clicked!")}
          />
          <Button
            label="Warning Button"
            variant="warning"
            size="small"
            onClick={() => alert("Warning Button Clicked!")}
          />
          <Button
            label="Danger Button"
            variant="danger"
            size="medium"
            onClick={() => alert("Danger Button Clicked!")}
          />
          <Button
            label="Disabled Button"
            variant="primary"
            size="medium"
            disabled
            onClick={() => alert("Disabled Button Clicked!")}
          />
        </Content>
      </Section>

      {/* Carousel Section */}
      <Section title="Carousel Component">
        <Carousel
          items={[
            <Image
              src="https://via.placeholder.com/300"
              alt="Image 1"
              rounded
            />,
            <Image
              src="https://via.placeholder.com/300/0000ff"
              alt="Image 2"
            />,
            <Image
              src="https://via.placeholder.com/300/00ff00"
              alt="Image 3"
              rounded
            />,
          ]}
        />
      </Section>

      <Divider />

      {/* Dropdown Section */}
      <Section title="Dropdown Component">
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          onSelect={(option) => alert(`Selected: ${option}`)}
        />
      </Section>

      <Divider />

      {/* Images Section */}
      <Section title="Image Components">
        <Content className="space-y-4">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Example Image"
            rounded
            shadow
            border
          />
          <Image
            src="https://via.placeholder.com/400x200"
            alt="Example Image 2"
            shadow
          />
        </Content>
      </Section>

      <Divider />

      {/* List Section */}
      <Section title="List Component">
        <List
          items={["Item 1", "Item 2", "Item 3"]}
          textColor="text-gray-700"
          icon={<FaStar className="text-yellow-500" />}
          border
          spacing="mb-4"
        />
        <List
          items={["Item A", "Item B", "Item C"]}
          textColor="text-blue-700"
          icon={<FaCheckCircle className="text-green-500" />}
          spacing="mb-2"
        />
      </Section>

      {/* Divider Section */}
      <Section title="Divider Component">
        <Content className="space-y-4">
          <Divider type="solid" orientation="horizontal" />
          <Divider type="dotted" orientation="horizontal" />
          <Divider type="dashed" orientation="horizontal" />
          <Divider type="double" orientation="horizontal" />
        </Content>
      </Section>

      {/* Vertical Divider Example */}
      <Section title="Vertical Divider Component">
        <Content className="flex items-center h-32">
          <div>Content A</div>
          <Divider
            type="solid"
            orientation="vertical"
            length="32"
            thickness="2px"
            color="border-gray-600"
          />
          <div>Content B</div>
          <Divider
            type="dotted"
            orientation="vertical"
            length="32"
            thickness="2px"
            color="border-gray-600"
          />
          <div>Content C</div>
        </Content>
      </Section>

      <Divider />

      {/* Pagination Section */}
      <Section title="Pagination Component">
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={(page) => console.log(`Go to page ${page}`)}
        />
      </Section>

      <Divider />

      {/* Spinner Section */}
      <Section title="Spinner Component">
        <Content className="flex space-x-4">
          <Spinner size="small" color="primary" />
          <Spinner size="medium" color="secondary" />
          <Spinner size="large" color="accent" />
        </Content>
      </Section>

      <Divider />

      {/* Table Section */}
      <Section title="Table Component">
        <Table
          headers={["Header 1", "Header 2"]}
          rows={[
            ["Row 1, Cell 1", "Row 1, Cell 2"],
            ["Row 2, Cell 1", "Row 2, Cell 2"],
          ]}
          headerColor="bg-blue-200"
          rowOddColor="bg-gray-100"
          rowEvenColor="bg-gray-50"
          borderColor="border-gray-400"
        />
      </Section>

      <Divider />

      {/* Video Section */}
      <Section title="Video Component">
        <Content className="space-y-4">
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            size="small"
            shadow
            border
          />
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            size="medium"
            shadow
            border
          />
          <Video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            size="large"
            shadow
            border
          />
        </Content>
      </Section>

      <Divider />

      {/* Card Section */}
      <Section title="Card Component">
        <Card
          variant="simple"
          title="Simple Card"
          body="This is a simple card."
        />

        <Card
          variant="product"
          title="Product Card"
          price="$29.99"
          imageSrc="https://via.placeholder.com/300"
          body="This is a brief description of the product."
        />

        <Card
          variant="info"
          title="Info Card"
          infoItems={[
            { label: "Name", value: "John Doe" },
            { label: "Age", value: "30" },
            { label: "Location", value: "New York" },
          ]}
        />
      </Section>

      <Divider />

      {/* Modal Section */}
      <Section title="Modal Component">
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setModalOpen(true)}
        />
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h3 className="text-xl font-semibold">This is a Modal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <Button
              label="Close"
              variant="secondary"
              onClick={() => setModalOpen(false)}
            />
          </Modal>
        )}
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-8">
          <div  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SubTitle align="center">Form Components</SubTitle>
            <Input placeholder="Input" type="text" name="prueba1" />
            <Input placeholder="Input password" type="password" name="prueba2" />
            <Divider />
            <Label id="prueba">Label</Label>
            <Label textSize="text-lg" fontWeight="font-bold" textColor="text-red-500">Label</Label>
            <Divider />
            <Textarea placeholder="Textarea" />
            <Divider />
            <SubTitle>CheckBox</SubTitle>
            <CheckBox />
            <CheckBox customSize="h-6 w-6" />
            <Divider />
            <SubTitle>RadioButton</SubTitle>
            <RadioButton />
            <RadioButton size="h-6 w-6" />
            <Divider />
            <SubTitle>Select</SubTitle>
            <Select options={[{value: "1", label: "Option 1"}, {value: "2", label: "Option 2"}]} />
            <Select options={[{value: "1", label: "Option 1"}, {value: "2", label: "Option 2"}]} width="w-1/2" />
            <Divider />
            <FileUpload />
          </div>
        </div>
        <Divider />
        <SubTitle>Navbar</SubTitle>
        <Navbar
          logoText="LogoText"
          tagline="Prueba de componente navbar"
          items={navItems}
          navbarClassName="bg-gray-200"
          logoClassName="text-yellow-500"
          taglineClassName="text-gray-400"
          itemClassName="hover:text-yellow-300"
        />
        <Divider />
        <Sidebar title="Sidebar prueba">
          <SidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label="Blocks"
            onClick={() => console.log('Blocks clicked')}
          />
          <SidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label="Books"
            onClick={() => console.log('Books clicked')}
          />
          {/* Agrega más SidebarItem según sea necesario */}
        </Sidebar>
      </Section>
    </Content>
  );
}

export default App;
