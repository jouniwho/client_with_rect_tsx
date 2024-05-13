import React, { useEffect, useState } from "react";

interface NavBarProps {
    brandName: string;
    imageSrcPath: string;
    navItems: string[];
}

type DropDownProps = {
    cities: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    citySelection: Function;
  };


const DropDown: React.FC<DropDownProps> = ({
    cities,
    citySelection,
  }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
  
    const onClickHandler = (city: string): void => {
      citySelection(city);
    };
  
    useEffect(() => {
      setShowDropDown(showDropDown);
    }, [showDropDown]);
  
    return (
      <>
        <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
          {cities.map(
            (city: string, index: number): JSX.Element => {
              return (
                <p
                  key={index}
                  onClick={(): void => {
                    onClickHandler(city);
                  }}
                >
                  {city}
                </p>
              );
            }
          )}
        </div>
      </>
    );
  };

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectCity, setSelectCity] = useState<string>("");
    const cities = () => {
      return ["item 1", "item2", "item 3", "item 4"];
    };
  
    /**
     * Toggle the drop down menu
     */
    const toggleDropDown = () => {
      setShowDropDown(!showDropDown);
    };
  
    /**
     * Hide the drop down menu if click occurs
     * outside of the drop-down element.
     *
     * @param event  The mouse event
     */
    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
      if (event.currentTarget === event.target) {
        setShowDropDown(false);
      }
    };
  
    /**
     * Callback function to consume the
     * item from child component
     */
    const citySelection = (city: string): void => {
      setSelectCity(city);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={imageSrcPath}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        alt=""
                    />
                    <span className="fw-bolder fs-4">{brandName}</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div
                
                    className="collapse
           navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        {navItems.map((items, index) => (
                            <li
                                key={items}
                                className="nav-item"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <a
                                    className={
                                        selectedIndex == index
                                            ? "nav-link active fw-bold"
                                            : "nav-link"
                                    }
                                    href="#"
                                >
                                    {items}
                                </a>
                            </li>
                        ))}
                                        <div className="announcement">
        <div>
          {selectCity
            ? `You selected ${selectCity}`
            : "Select"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectCity ? "Select: " + selectCity : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            cities={cities()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
                    </ul>
                    <form className="d-flex me-3">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;
