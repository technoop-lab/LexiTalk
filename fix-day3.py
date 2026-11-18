import json, shutil
p = "DAYS_01_10_CONTENT.json"
d = json.load(open(p))
day = [x for x in d["days"] if x.get("dayNumber") == 3][0]
v = day["learn"]["vocabulary"]
ex = [
"It's astonishing how quickly she learned to speak English.",
"The view from the hilltop was incredible.",
"The Taj Mahal looks magnificent at sunrise.",
"We watched a spectacular fireworks show on Diwali.",
"Your mother's cooking is always delightful.",
"The documentary about space was fascinating.",
"The traffic on the highway was dreadful today.",
"The condition of the railway station was appalling.",
"You did a splendid job on the presentation.",
"Her recovery after the operation was remarkable.",
"He gave a loud exclamation of joy when he heard the news.",
"An interjection like 'oh no' shows sudden emotion.",
"The mountain road has a breathtaking view.",
"It's unbelievable how cheap the vegetables are in that market.",
"The price they charged for a cup of tea was outrageous.",
"It was heartbreaking to see the dog left out in the rain.",
"The last over of the match was thrilling.",
"The company's growth this year has been phenomenal.",
"Driving at night on that narrow road is terrifying.",
"His story about missing the train was hilarious.",
"We had a marvellous time at the wedding.",
"The floods caused catastrophic damage to the village.",
"She wore a stunning red saree to the party.",
"The team's performance in the final was disastrous.",
"The response to the donation drive was overwhelming.",
"To my astonishment, he remembered my name after ten years.",
"The bike ride down the mountain was exhilarating.",
"The news of his accident was shocking.",
"Her escape from the burning building was miraculous.",
"It was heartwarming to see the whole street help the old man.",
"You look fabulous in that blue shirt.",
"The smell from the dustbin was horrendous.",
"The newspaper printed a sensational story about the actor.",
"The way the workers were treated was deplorable.",
"She was ecstatic when she passed her exam.",
"Building the bridge was a monumental effort.",
"The internet speed in my area is abysmal.",
"The cricket match was enthralling from start to finish.",
"The film showed a grotesque monster.",
"The singer's voice was sublime.",
"The embroidery on her dupatta is exquisite.",
"The view from the top of the mountain was mindblowing.",
"It was a gripping novel, so I finished it in one night.",
"The price of the new phone is jawdropping.",
"The elephant walked past us with majestic steps.",
"The results of the experiment were astounding.",
"He wrote a heartfelt letter to his mother.",
"I was flabbergasted when they offered me the job.",
"The heat this summer is unprecedented.",
"The dancer's movements were mesmerizing.",
"I am thrilled to hear that you got the scholarship.",
"The bride looked resplendent in gold jewellery.",
"The number of people at the fair was staggering.",
"Leaving the mess for someone else to clean is disgraceful.",
"The crowd's reaction to the final goal was electrifying.",
"The exam looked formidable, but she passed easily.",
"The old house had a spine-chilling atmosphere.",
"It is unfathomable why he left such a good job.",
"The Golden Temple at night is awe-inspiring.",
"The music had a transcendent quality that silenced the hall.",
]
assert len(ex) == len(v), f"count mismatch {len(ex)} vs {len(v)}"
shutil.copy(p, p + ".before-day3-fix")
for i, t in enumerate(ex):
    v[i]["example"] = t
for i in (10, 11, 25):
    v[i]["pos"] = "noun"
v[50]["lemma"] = "thrilled"
v[50]["wordForm"] = "thrilled"
json.dump(d, open(p, "w"), ensure_ascii=False, indent=1)
print("day 3 rewritten:", len(ex), "examples")
print("appalling count now:", sum(1 for x in v if x["lemma"] == "appalling"))
print("nouns fixed:", [v[i]["lemma"] for i in (10, 11, 25)])
print("pos of index 50:", v[50]["pos"], v[50]["lemma"])
