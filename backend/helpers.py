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
        apartment_pics = driver.find_elements_by_tag_name('img')

        output["pics"] = apartment_pics

    except TimeoutException:
        output["error"] = "Form data took too long to load"

    except NoSuchElementException:
        output["error"] = "One or more form elements could not be found"

    finally:
        if not output.get("error"):
            output["success"] = f"Obtained pictures"

        driver.quit()
        print (f"This is the output: {output}")
        return output