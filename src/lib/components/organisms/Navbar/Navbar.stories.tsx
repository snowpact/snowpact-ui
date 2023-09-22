import type { Meta, Story } from '@storybook/react/types-6-0';
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
        <Navbar.Group label="Services" href="/testus" withUnderlineEffect>
          <Navbar.Link href="/navbars1">Construction</Navbar.Link>
          <Navbar.Link href="/navbars2">Food</Navbar.Link>
          <Navbar.Link href="/navbars3">Shopping</Navbar.Link>
          <Navbar.Link href="/navbars4">Business</Navbar.Link>
        </Navbar.Group>
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
    </>
  )
};

export const WithNavbarDropdown = Template.bind({});
WithNavbarDropdown.args = {
  height: 200,
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

        <Navbar.Group label="Services" href="/" withUnderlineEffect>
          <div className="flex w-full gap-5">
            <span className="w-1/12 border-r">
              <Navbar.Link href="/">Services</Navbar.Link>
            </span>
            <div className="flex w-full justify-between px-10">
              <div>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </div>
              <div>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </div>
              <div>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </div>
              <div>
                <Navbar.Link href="/navbars">About</Navbar.Link>
                <Navbar.Link href="/navbars">Services</Navbar.Link>
                <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </div>
            </div>
          </div>
        </Navbar.Group>
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
        <Navbar.Toggle />
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
        </section>
      </main>
    </div>
  );
};
