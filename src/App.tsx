import {
  Accordion,
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
} from "../src/components/index";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

function App() {
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
      </Section>
    </Content>
  );
}

export default App;
