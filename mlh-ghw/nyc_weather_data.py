import requests
from bs4 import BeautifulSoup
import pandas
import matplotlib.pyplot as plt

# parse temp from html code
def parse_temp(html):
  text = html.find("span").get_text()
  if text == "--":
    return None
  return int(text[:-1])

# create dataframe of all high and low temps
def create_dataframe(high_temps, low_temps):
  body = []
  for i in range(len(high_temps)):
    high = parse_temp(high_temps[i])
    low = parse_temp(low_temps[i])
    body.append([i+1, high, low])

  df = pandas.DataFrame(
    body,
    columns = ["day", "highs", "lows"]
  )
  
  return df


page = requests.get("https://weather.com/weather/monthly/l/96f2f84af9a5f5d452eb0574d4e4d8a840c71b05e22264ebdc0056433a642c84")

soup = BeautifulSoup(page.content, "html.parser")
high_temps = soup.find_all("div", class_="CalendarDateCell--tempHigh--3k9Yr")
low_temps = soup.find_all("div", class_="CalendarDateCell--tempLow--2WL7c")


df = create_dataframe(high_temps, low_temps)

plt.title('NYC High and Low Temps from ~This Month')
plt.xlabel('Day')
plt.ylabel('Temperature')

plt.plot(df['day'], df['highs'], label='High Temps', linestyle='solid', color='r', marker='o', linewidth=2)
plt.plot(df['day'], df['lows'], label='Low Temps', linestyle='solid', color='b', marker='o', linewidth=2)

plt.legend()

plt.show()
