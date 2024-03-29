import type { Meta, Story } from '@storybook/react/types-6-0';
import { FaAccusoft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Navbar } from '.';
import { ProgressBar } from '../../atoms';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { Hero } from '../../molecules';
import { Dropdown } from '../../molecules/Dropdown';
import type { NavbarComponentProps } from './Navbar';

export default {
  title: 'Components/organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const EXPANSION_ITEMS = [
  {
    label: 'Construction',
    href: '/'
  },
  {
    label: 'Food',
    href: '/'
  },
  {
    label: 'Animals',
    href: '/'
  },
  {
    label: 'House',
    href: '/'
  }
];

const buildExpansionAsChildren = (items: { label: string; href: string }[], withUnderlineEffect?: boolean) => {
  return (
    <>
      {items.map((item, index) => (
        <span key={index} className="w-full md:w-fit">
          <Navbar.Link as={Link} href={item.href} withUnderlineEffect={withUnderlineEffect}>
            {item.label}
          </Navbar.Link>
        </span>
      ))}
    </>
  );
};

const Template: Story<NavbarComponentProps> = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.storyName = 'Default';
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link withUnderlineEffect href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  )
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Group label="Services" withUnderlineEffect>
          <Navbar.Link href="/navbars1" withUnderlineEffect>
            Construction
          </Navbar.Link>
          <Navbar.Link href="/navbars2" withUnderlineEffect>
            Food
          </Navbar.Link>
          <Navbar.Link href="/navbars3" withUnderlineEffect>
            Shopping
          </Navbar.Link>
          <Navbar.Link href="/navbars4" withUnderlineEffect>
            Business
          </Navbar.Link>
        </Navbar.Group>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">ServicesA Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        <Navbar.Link>
          <div className="flex gap-3 md:order-2">
            <Button>Get started</Button>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </>
  )
};

export const WithNavbarDropdown = Template.bind({});
WithNavbarDropdown.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>

        <Navbar.Group label="Services" withUnderlineEffect>
          <Navbar.Expansion groupName="Services" groupLink="/" withUnderlineEffect>
            {buildExpansionAsChildren(EXPANSION_ITEMS)}
          </Navbar.Expansion>
        </Navbar.Group>
        <Navbar.Group label="Services" withUnderlineEffect>
          <Navbar.Expansion>{buildExpansionAsChildren(EXPANSION_ITEMS, true)}</Navbar.Expansion>
        </Navbar.Group>
        <Navbar.Group label="Services" withUnderlineEffect>
          <Navbar.Expansion groupName="Services">{buildExpansionAsChildren(EXPANSION_ITEMS)}</Navbar.Expansion>
        </Navbar.Group>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        <Navbar.Link>
          <div className="flex justify-center gap-3 md:order-2">
            <Button>Get started</Button>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </>
  )
};

export const WithClassicDropdown = Template.bind({});
WithClassicDropdown.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  )
};

export const RealCaseExample = () => {
  return (
    <div>
      <ProgressBar />
      <Navbar sticky="transparent">
        <Navbar.Brand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
        </Navbar.Brand>
        <Navbar.Toggle closeIcon={FaAccusoft} />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
          <Navbar.Link>
            <div className="flex gap-3 md:order-2">
              <Button>Get started</Button>
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="container">
        <section>
          <Hero
            backgroundImage="https://picsum.photos/1920/1080"
            position="center-left"
            backgroundPosition="right center"
            foregroundMaxWidth="45%"
            centerPositionOnMobile
          >
            <Hero.Foreground
              title="Votre équipe de développement agile nodejs et react"
              subtitle="Chez Snowpact, nous vous accompagnons sur la conception, le développement et la mise en production de votre projet web et mobile."
            />
            <Hero.CallToActions>
              <Button type="button">Contactez-nous</Button>
              <Button type="button">Action 2</Button>
            </Hero.CallToActions>
          </Hero>
          <h1 className="text-4xl font-bold">Navbar</h1>
          <p className="text-lg text-gray-500">
            A responsive navigation bar that can be used for navigation, search, or anything else.
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl nec lacinia aliquam, nisl nisl
            tincidunt nunc, eget aliquam massa nisl eget dolor. Sed euismod,
          </p>
        </section>
      </main>
    </div>
  );
};
