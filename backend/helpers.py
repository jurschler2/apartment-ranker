from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager

# run selenium headless
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")


def get_apartment(url):
    """ Get an apartment from craigslist with the url """

    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(url)

    output = {}

    try:
        apartment_pics_raw = driver.find_elements_by_tag_name('img')
        apartment_price = driver.find_element_by_class_name('price').text
        apartment_address = driver.find_element_by_class_name('mapaddress').text

    except TimeoutException:
        output["error"] = "Form data took too long to load"

    except NoSuchElementException:
        output["error"] = "One or more form elements could not be found"

    finally:
        if not output.get("error"):
            output["success"] = f"Obtained pictures"

        apartment_pics = []

        for image in apartment_pics_raw:

            im = {'src': image.get_attribute('src')}
            apartment_pics.append(im)

        output["pics"] = apartment_pics
        output["price"] = apartment_price
        output["address"] = apartment_address
        output["url"] = url

        driver.quit()

        return output
