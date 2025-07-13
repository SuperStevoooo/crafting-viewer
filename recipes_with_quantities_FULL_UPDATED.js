const recipes = {
  "Tiny Catalyst Shard": {
    "ingredients": [
      {
        "label": "A",
        "item": "Activated Charcoal",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Powdered Silver",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Potion",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Small Catalyst Shard": {
    "ingredients": [
      {
        "label": "A",
        "item": "Tiny Catalyst Shard",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Catalyst Shard": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Catalyst Shard",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Large Catalyst Shard": {
    "ingredients": [
      {
        "label": "A",
        "item": "Catalyst Shard",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Catalyst Cluster": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Catalyst Shard",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Mortar & Pestle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Bowl",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Stick",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Dense Charcoal": {
    "ingredients": [
      {
        "label": "A",
        "item": "Charcoal",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Crushed Seashell": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Large Shell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Serpent Poison": {
    "ingredients": [
      {
        "label": "A",
        "item": "Sea Serpent",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Powdered Silver": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Silver Nugget",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Pinch of Silver Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Powdered Silver",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Activated Charcoal": {
    "ingredients": [
      {
        "label": "A",
        "item": "Dense Charcoal",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fuel",
        "qty": 1
      }
    ],
    "system": "Smelter/Furnace",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Oil Flask": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oily Rock",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fuel",
        "qty": 1
      }
    ],
    "system": "Smelter/Furnace",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Sulfur": {
    "ingredients": [
      {
        "label": "A",
        "item": "Sulfuric Rock",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fuel",
        "qty": 1
      }
    ],
    "system": "Smelter/Furnace",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Nightshade Paste": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Nightshade",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Moonstalker Paste": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Moonstalker",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Mandrake Root Paste": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mandrake Root",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Gillyweed Mush": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gillyweed",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rowan Berry Mush": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Rowan Berries",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ashblossom Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ashblossom",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Wolfsbane Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Wolfsbane",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Cat's Tongue Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Cat's Tongue",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Sourgrass Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sourgrass",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Silverthorn Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Silverthorn",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Singing Nettle Powder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Singing Nettle",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Dried Lightning Moss": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Lightning Moss",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Frost Lichen Crumble": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Frost Lichen",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Crushed Hag Finger": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Hagfinger",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Crushed Amanita Mushroom": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Red Amanita Mushroom",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Crushed Mindflayer Stinkhorn": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mindflayer Stinkhorn",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Crushed Fairy Stool": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fairy Stool",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ground Fish Scale": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mortar & Pestle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Rare Fish Scale",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Lesser Healing Shrooms": {
    "ingredients": [
      {
        "label": "A",
        "item": "Red Mushroom",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Brown Mushroom",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        "A"
      ],
      [
        "",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Smokey Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oil Flask",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sulfur",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Crushed Fairy Stool",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        "A"
      ],
      [
        "",
        "B",
        "B"
      ],
      [
        "",
        "C",
        "C"
      ]
    ]
  },
  "Leafy Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rowan Berry Mush",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Cat's Tongue Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        "A"
      ],
      [
        "",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rooty Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Singing Nettle Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Frost Lichen Crumble",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Shroomy Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Lesser Healing Shrooms",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Shocking Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Dried Lightning Moss",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Calcium Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Ground Fish Scale",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bitter Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Sulfur",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Acidic Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oil Flask",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sulfur",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Venomous Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oil Flask",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Serpent Poison",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Glowing Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Moonstalker Paste",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Nightshade Paste",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Earthy Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mandrake Root Paste",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Frosty Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Frost Lichen Crumble",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Rosey Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rowan Berry Mush",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Scorching Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Ashblossom Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Eerie Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crushed Mindflayer Stinkhorn",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Booming Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Singing Nettle Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Deep Sea Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Gillyweed Mush",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ground Fish Scale",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Pale Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crushed Hag Finger",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Greasy Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oil Flask",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ground Fish Scale",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Azure Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Moonstalker Paste",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Seashell",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Herbal Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Cat's Tongue Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sourgrass Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Verdant Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Sourgrass Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Hag Finger",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Colorful Scale Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crushed Fairy Stool",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ground Fish Scale",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Smoldering Mixture A\u00a0 - Sulfur": {
    "ingredients": [
      {
        "label": "B",
        "item": "Ashblossom Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Flickering Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Ashblossom Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gillyweed Mush",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Toxic Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mandrake Root Paste",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Nightshade Paste",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Fibrous Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crushed Amanita Mushroom",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Wolfsbane Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Pungent Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Dried Lightning Moss",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ashblossom Powder",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Sourgrass Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "C",
        "C",
        "C"
      ]
    ]
  },
  "Concentrated Pungent Extract": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pungent Mixture",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Thorny Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Wolfsbane Powder",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Silverthorn Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Concentrated Thorny Extract": {
    "ingredients": [
      {
        "label": "A",
        "item": "Thorny Mixture",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Vibrant Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crushed Amanita Mushroom",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Cat's Tongue Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Concentrated Vibrant Mixture": {
    "ingredients": [
      {
        "label": "A",
        "item": "Vibrant Mixture",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Uncooked Binding Agent": {
    "ingredients": [
      {
        "label": "A",
        "item": "Tree Sap",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Meat Fat",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Binding Agent": {
    "ingredients": [
      {
        "label": "A",
        "item": "Uncooked Binding Agent",
        "qty": 1
      }
    ],
    "system": "Campfire",
    "table": [
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ]
    ]
  },
  "Salty Brine": {
    "ingredients": [
      {
        "label": "A",
        "item": "Water Bottle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Salt",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polish": {
    "ingredients": [
      {
        "label": "A",
        "item": "Sand",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Glowstone Dust",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Woodworker's Oil": {
    "ingredients": [
      {
        "label": "A",
        "item": "Mashed Seeds",
        "qty": 1
      }
    ],
    "system": "Campfire",
    "table": [
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ]
    ]
  },
  "Vegetable Tan": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oak Log",
        "qty": 1
      }
    ],
    "system": "Composter",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Mashed Seeds": {
    "ingredients": [
      {
        "label": "A",
        "item": "Wheat Seeds",
        "qty": 1
      }
    ],
    "system": "Composter",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Fertilizer": {
    "ingredients": [
      {
        "label": "A",
        "item": "Potato or Carrot or Cod or Salmon",
        "qty": 1
      }
    ],
    "system": "Composter",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Enchanted Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Enchanted Book (Any)",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Activated Enchanted Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Amethyst Block",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Enchanted Dust",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Raw Copper",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "A"
      ],
      [
        "A",
        "C",
        "A"
      ],
      [
        "A",
        "B",
        "A"
      ]
    ]
  },
  "Find Familiar Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Activated Charcoal",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Crushed Fairy Stool",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Sourgrass Powder",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Illusory Script Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Ink Sac",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Arcane Lock Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Augury Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Bone",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Stick",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "C",
        "C",
        ""
      ]
    ]
  },
  "Magic Mouth Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Honeycomb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Jade",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Summon Beast Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Feather",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Ground Fish Scale",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "D",
        "D",
        "E"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Clairvoyance Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Arcane Focus",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Glyph of Warding Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Stick",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Powdered Diamond",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Summon Fey Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Poppy",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "C",
        "",
        ""
      ]
    ]
  },
  "Summon Shadowspawn Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Potion",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Powdered Gemstone",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "",
        ""
      ]
    ]
  },
  "Summon Undead Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Bone",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "C",
        "",
        ""
      ]
    ]
  },
  "Divination Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Platinum Ore",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Stick",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Shadow of Moil Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Powdered Gemstone 50gp",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Bone",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Summon Aberration Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Platinum Ore",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Glass Bottle",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ]
    ]
  },
  "Summon Construct Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Iron Ingot (lored)",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Summon Elemental Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Nugget",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Glass Bottle",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ]
    ]
  },
  "Legend Lore Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Incense & Oil Bundle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Bone",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Gold Bar",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "C",
        "",
        ""
      ]
    ]
  },
  "Scrying Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Arcane Focus",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Silver Bar",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Summon Celestial Material": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
    },
    "Incense & Oil Bundle": {
        "ingredients": [
            {
                "label": "A",
                "item": "Oil Flask",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Candle",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                "A"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
  "Powdered Diamond Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Imperfect Diamond",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mortar and Pestle",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
    },
     "Powdered Ruby Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Ruby",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mortar and Pestle",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
    },
  "Refined Powdered Ruby Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Star Ruby",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mortar and Pestle",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
    },
    "Refined Powdered Diamond Dust": {
        "ingredients": [
            {
                "label": "A",
                "item": "Tiny Diamond",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Mortar and Pestle",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
  "Refined Powdered Blue Sapphire Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Blue Sapphire",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mortar and Pestle",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
    },
  "Refined Powdered Emeraude Dust": {
    "ingredients": [
      {
        "label": "A",
        "item": "Emeraude",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Mortar and Pestle",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
    },
  "Expensive Ink": {
    "ingredients": [
      {
        "label": "A",
        "item": "Powdered Gemstone",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Ink Sac",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
    },
    "Refined Expensive Ink": {
        "ingredients": [
            {
                "label": "A",
                "item": "Refined Powdered Gemstone",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Ink Sac",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "B",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
  "Sealing Wax": {
    "ingredients": [
      {
        "label": "A",
        "item": "Honeycomb Block",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Spellbook": {
    "ingredients": [
      {
        "label": "A",
        "item": "Powdered Gemstone",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Book",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Soap": {
    "ingredients": [
      {
        "label": "A",
        "item": "Honeycomb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Lilac",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Meat Fat",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "C",
        ""
      ]
    ]
  },
  "Arcane Focus": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Holy Symbol": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pinch of Silver Dust",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Signet Ring": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Gemstone Dust Trade Pack": {
    "ingredients": [
      {
        "label": "A",
        "item": "Powdered Gemstone Dust (x50)",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Refined Gemstone Dust Trade Pack": {
    "ingredients": [
      {
        "label": "A",
            "item": "Refined Powdered Gemstone (x10)",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ring Base Wood and Bone": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Bone or Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Pendant Base Wood and Bone": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Bone or Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
    "Bracelet Base Wood and Bone": {
        "ingredients": [
            {
                "label": "A",
                "item": "Chunk of Bone or Chunk of Wood",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Woodworker's Oil",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ]
        ]
    },
    "Crown Base Wood and Bone": {
        "ingredients": [
            {
                "label": "A",
                "item": "Chunk of Bone or Chunk of Wood",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Woodworker's Oil",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                "A"
            ]
        ]
    },
    "Ring Base Gold and Silver": {
        "ingredients": [
            {
                "label": "A",
                "item": "Silver or Gold Nuggets",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Polish",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "A",
                "B",
                "A"
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Pendant Base Gold and Silver": {
        "ingredients": [
            {
                "label": "A",
                "item": "Silver or Gold Nuggets",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Polish",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ]
        ]
    },
    "Bracelet Base Gold and Silver": {
        "ingredients": [
            {
                "label": "A",
                "item": "Silver or Gold Nuggets",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Polish",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Small Gold or Silver Bar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "C",
                "B",
                "C"
            ],
            [
                "A",
                "A",
                "A"
            ]
        ]
    },
    "Crown Base Gold and Silver": {
        "ingredients": [
            {
                "label": "A",
                "item": "Silver or Gold Nuggets",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Polish",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Small Gold or Silver Bar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "C",
                "A"
            ],
            [
                "C",
                "C",
                "C"
            ],
            [
                "A",
                "B",
                "A"
            ]
        ]
    },
  "Platinum Ring [50GP]": {
    "ingredients": [
      {
        "label": "A",
        "item": "Platinum Ore",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
    },
    "Platinum Pendant": {
        "ingredients": [
            {
                "label": "A",
                "item": "Platinum Ore",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Polish",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "",
                ""
            ],
            [
                "A",
                "A",
                "A"
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
  "Platinum Bracelet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Silver Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Platinum Ore",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "",
        "C"
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "C",
        ""
      ]
    ]
  },
  "Platinum Crown": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Silver Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Platinum Ore",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "C",
        "A"
      ],
      [
        "C",
        "C",
        "C"
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Simple Pearl Bracelet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pearl",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Four Pearl Bracelet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pearl",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Complete Pearl Bracelet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pearl",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Upgrade To Four Pearl Bracelet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pearl",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Simple Pearl Bracelet",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
    },
    "Upgrade To Complete Pearl Bracelet": {
        "ingredients": [
            {
                "label": "A",
                "item": "Pearl",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Four Pearl Bracelet",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "A",
                "B",
                "A"
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
  "Ring w/ Gem": {
    "ingredients": [
      {
        "label": "A",
        "item": "Band/Ring Base",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gemstone",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Pendant w/ Gem": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pendant Base",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gemstone",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "B",
        "",
        ""
      ]
    ]
  },
  "Bracelet w/ Gems": {
    "ingredients": [
      {
        "label": "A",
        "item": "Bracelet Base",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gemstone*",
        "qty": 1
      }
    ],
    "system": "Crafting Bnech",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "B",
        "",
        "B"
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Crown w/ Gems": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crown Base",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Gemstone*",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Waterskin": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Riding Saddle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Rope Strands",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Military Saddle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Riding Saddle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Armor Stud",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "",
        ""
      ]
    ]
  },
  "Exotic Saddle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Military Saddle",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ]
    ]
  },
  "Raw Hide": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Raw Hide Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Raw Hide",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Shears",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Cured Hide Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Raw Hide Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Salty Brine",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Limed Hide Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Cured Hide Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Milk Bucket",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Prepared Hide Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Limed Hide Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Sword",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Tanned Leather Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Prepared Hide Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Vegetable Tan",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Fine Leather Sheet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Tanned Leather Sheet",
        "qty": 1
      }
    ],
    "system": "Campfire",
    "table": [
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ]
    ]
  },
  "Leather Strap": {
      "ingredients": [
          {
              "label": "A",
              "item": "Tanned Leather Sheet",
              "qty": 1
          }
      ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Leather Guard": {
    "ingredients": [
      {
        "label": "A",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Padded Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Armor Stud",
        "qty": 1
      },
      {
        "label": "B",
        "item": "MC Leather",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Padding",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Binding Agent",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Leather Straps",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "D",
        "E",
        "E"
      ]
    ]
  },
  "Leather Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Box of Rivets",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "C",
        "C",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Studded Leather Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather Armor",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Box of Armor Studs",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Box of Rivets",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "C",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hide Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Box of Rivets",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Horse Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "4x Same Armor",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Whip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Raw Clay Bullet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Clay Ball",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Clay Bullet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Raw Clay Bullet",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fuel",
        "qty": 1
      }
    ],
    "system": "Furnace",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Slingshot Ammo": {
    "ingredients": [
      {
        "label": "A",
        "item": "Clay Bullet [Slingshot]",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ology Clay Pot Box": {
    "ingredients": [
      {
        "label": "A",
        "item": "Clay Piece",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Ology Clay Pot": {
    "ingredients": [
      {
        "label": "A",
        "item": "Clay Pot Box",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ology Potted Plant": {
      "ingredients": [
          {
              "label": "A",
              "item": "Ology Clay Pot",
              "qty": 1
          },
          {
              "label": "B",
              "item": "Fertilizer",
              "qty": 1
          },
          {
              "label": "C",
              "item": "Mystery Seeds",
              "qty": 1
          }
      ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "C",
        "",
        "C"
      ],
      [
        "C",
        "C",
        "C"
      ]
    ]
    },
    "Potted Plant": {
        "ingredients": [
            {
                "label": "A",
                "item": "Fertilizer",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Dirt",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Flower Pot",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "B",
                ""
            ],
            [
                "",
                "C",
                ""
            ]
        ]
    },
    "Grown Mystery Plant": {
        "ingredients": [
            {
                "label": "A",
                "item": "Plant Pot",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Mystery Seeds",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Water Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "B",
                ""
            ],
            [
                "",
                "C",
                ""
            ]
        ]
    },
  "Small Molten Iron": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      }
    ],
    "system": "Campfire",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Medium Molten Iron": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Large Molten Iron": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Small Iron Ingot": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Mold or Consumable Small Mold",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Medium Iron Ingot": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Medium Mold or Consumable Medium Mold",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Large Iron Ingot": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Large Mold or Consumable Large Mold",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Iron Chain": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Chain Mold",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "C",
        "",
        ""
      ]
    ]
    },
    "Wine Base": {
        "ingredients": [
            {
                "label": "A",
                "item": "Yeast",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Water Bucket",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Grapes",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "A"
            ],
            [
                "C",
                "C",
                "C"
            ],
            [
                "D",
                "D",
                "D"
            ]
        ]
    },
    "Brew Base": {
        "ingredients": [
            {
                "label": "A",
                "item": "Yeast",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Water Bucket",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Wheat",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Sugar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "A"
            ],
            [
                "C",
                "C",
                "C"
            ],
            [
                "D",
                "D",
                "D"
            ]
        ]
    },
    "Yeast": {
        "ingredients": [
            {
                "label": "A",
                "item": "Apple",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Honey Bottle",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Water Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Flour": {
        "ingredients": [
            {
                "label": "A",
                "item": "Wheat",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Rice Plant",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Salt": {
        "ingredients": [
            {
                "label": "A",
                "item": "Salt Chunk",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Spice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Spice Plant",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cream": {
        "ingredients": [
            {
                "label": "A",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Fruit Mash": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Fruit",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Soaked Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Water Bucket",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Rice",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Bowl of Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Soaked Rice",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Cheese Sauce": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cheese Ball",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Mixed Berries": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Berry",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Simple Syrup": {
        "ingredients": [
            {
                "label": "A",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Water Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chocolate Sauce": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cocoa Beans",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Buttercream": {
        "ingredients": [
            {
                "label": "A",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "C",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cake Mix": {
        "ingredients": [
            {
                "label": "A",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Butter",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Egg",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "C",
                "D"
            ],
            [
                "E",
                "E",
                "F"
            ]
        ]
    },
    "Vanilla Cake": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cake Mix",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Bake in Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Chocolate Cake Mix": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cake Mix",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Chocolate Sauce",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chocolate Fudge Cake": {
        "ingredients": [
            {
                "label": "A",
                "item": "Chocolate Cake",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Chocolate Sauce",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Candy Mold": {
        "ingredients": [
            {
                "label": "A",
                "item": "Clay",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ]
        ]
    },
    "Hard Candies (X6)": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bucket of Liquid Sugar",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Candy Mold",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Sweet Berry",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "C",
                "A"
            ],
            [
                "A",
                "B",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ]
        ]
    },
    "Candied Berries": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Berry",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Simple Syrup",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "B"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Lollipop": {
        "ingredients": [
            {
                "label": "A",
                "item": "Stick",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Simple Syrup",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Any Berry",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "B"
            ],
            [
                "C",
                "C",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Bucket of Sugar": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bucket",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Sugar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "B"
            ],
            [
                "B",
                "B",
                "B"
            ],
            [
                "B",
                "B",
                "B"
            ]
        ]
    },
    "Liquid Sugar": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bucket of Sugar",
                "qty": 1
            }
        ],
        "system": "Campfire",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cotton Candy": {
        "ingredients": [
            {
                "label": "A",
                "item": "Liquid Sugar",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Stick",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Taffy": {
        "ingredients": [
            {
                "label": "A",
                "item": "Water Bucket",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Simple Syrup",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Caramel Popcorn": {
        "ingredients": [
            {
                "label": "A",
                "item": "Popcorn",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Caramel",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "B"
            ]
        ]
    },
    "Caramel Apple": {
        "ingredients": [
            {
                "label": "A",
                "item": "Apple",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Caramel",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Stick",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "B"
            ],
            [
                "C",
                "C",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chocolate Dipped Oranges": {
        "ingredients": [
            {
                "label": "A",
                "item": "Orange",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Chocolate Sauce",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chocolate Dipped Strawberry": {
        "ingredients": [
            {
                "label": "A",
                "item": "Strawberry",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Chocolate Sauce",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "A",
                "B"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cooked Seafood": {
        "ingredients": [
            {
                "label": "A",
                "item": "Seafood",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Shrimp, Lobster, or Crab Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Seasoned Meat": {
        "ingredients": [
            {
                "label": "A",
                "item": "Meat",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Egg",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Flour",
                "qty": 1
            }
        ],
        "system": "Hold Stone Sword Crafting Bench",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Green Salad": {
        "ingredients": [
            {
                "label": "A",
                "item": "Lettuce",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Cucumber",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Beetroot",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Eggplant",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Spinach",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Carrot",
                "qty": 1
            },
            {
                "label": "G",
                "item": "Bowl",
                "qty": 1
            }
        ],
        "system": "Crafting Bench",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                "F"
            ],
            [
                "G",
                "",
                ""
            ]
        ]
    },
    "Cooked Seasoned Meat": {
        "ingredients": [
            {
                "label": "A",
                "item": "Seasoned Meat",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace or Smoker",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Fruit Salad": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Fruit",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Any Berries",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Bowl",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "B",
                "B"
            ],
            [
                "C",
                "",
                ""
            ]
        ]
    },
    "Onion Soup": {
        "ingredients": [
            {
                "label": "A",
                "item": "Onion",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Water Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Three Potato Mash": {
        "ingredients": [
            {
                "label": "A",
                "item": "Potato",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Bowl",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cheesy Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bowl of Rice",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Cheese Ball",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Salmon Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bowl of Rice",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Cooked Salmon",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Carrots & Peas Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bowl of Rice",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Carrot",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Peas",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Peppers & Peas Rice": {
        "ingredients": [
            {
                "label": "A",
                "item": "Peas",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Bowl of Rice",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Bell Peppers",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Stew Prep": {
        "ingredients": [
            {
                "label": "A",
                "item": "Beef",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Chicken",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Carrot",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Potato",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                "F"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chicken Sandwich": {
        "ingredients": [
            {
                "label": "A",
                "item": "Toasted Slice of Bread",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Tomato",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Onion",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Spinach",
                "qty": 2
            },
            {
                "label": "F",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "G",
                "item": "Cheese Ball",
                "qty": 1
            },
            {
                "label": "H",
                "item": "Cooked Seasoned Chicken",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "B",
                "A",
                "F"
            ],
            [
                "E",
                "C",
                "D"
            ],
            [
                "H",
                "A",
                "G"
            ]
        ]
    },
    "Steak & Cheese Sandwich": {
        "ingredients": [
            {
                "label": "A",
                "item": "Toasted Slice of Bread",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Tomato",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Onion",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Bell Pepper",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "G",
                "item": "Cheese Ball",
                "qty": 1
            },
            {
                "label": "H",
                "item": "Cooked Seasoned Beef",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "B",
                "A",
                "F"
            ],
            [
                "E",
                "C",
                "D"
            ],
            [
                "H",
                "A",
                "G"
            ]
        ]
    },
    "Veggie Sandwich": {
        "ingredients": [
            {
                "label": "A",
                "item": "Toasted Slice of Bread",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Lettuce",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Tomato",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Onion",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Spinach",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "G",
                "item": "Cucumber",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "G",
                "A",
                "F"
            ],
            [
                "C",
                "B",
                "D"
            ],
            [
                "F",
                "A",
                "E"
            ]
        ]
    },
    "Loaf of Bread": {
        "ingredients": [
            {
                "label": "A",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Yeast",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Bucket of Sugar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "C",
                "D"
            ],
            [
                "E",
                "",
                ""
            ]
        ]
    },
    "Biscuit": {
        "ingredients": [
            {
                "label": "A",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Yeast",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Bucket of Sugar",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                ""
            ]
        ]
    },
    "Pastry": {
        "ingredients": [
            {
                "label": "A",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Yeast",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Bucket of Sugar",
                "qty": 1
            },
            {
                "label": "F",
                "item": "Egg",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                "C"
            ],
            [
                "D",
                "E",
                "F"
            ]
        ]
    },
    "Uncooked Noodles": {
        "ingredients": [
            {
                "label": "A",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Bucket of Sugar",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Egg",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "C",
                "D"
            ],
            [
                "E",
                "",
                ""
            ]
        ]
    },
    "Muffin Mixture": {
        "ingredients": [
            {
                "label": "A",
                "item": "Egg",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Flour",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Salt",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "E",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "B"
            ],
            [
                "C",
                "D",
                "E"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Slice of Bread": {
        "ingredients": [
            {
                "label": "A",
                "item": "Bread",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Slice of Bread with Jam": {
        "ingredients": [
            {
                "label": "A",
                "item": "Slice of Bread",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fruit Mush",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Spice Muffin Mixture": {
        "ingredients": [
            {
                "label": "A",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Muffin Mixture",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Mixed Berry Muffin Mixture": {
        "ingredients": [
            {
                "label": "A",
                "item": "Mixed Berries",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Muffin Mixture",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Spice Muffins": {
        "ingredients": [
            {
                "label": "A",
                "item": "Spice Muffin Mixture",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Mixed Berry Muffin": {
        "ingredients": [
            {
                "label": "A",
                "item": "Mixed Berry Muffin Mixture",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Biscuit with Jam": {
        "ingredients": [
            {
                "label": "A",
                "item": "Biscuit",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fruit Mush",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Carrot & Potato Stew": {
        "ingredients": [
            {
                "label": "A",
                "item": "Potato",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Carrot",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Bowl",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "C",
                "",
                ""
            ]
        ]
    },
    "Stew": {
        "ingredients": [
            {
                "label": "A",
                "item": "Stew Prep",
                "qty": 1
            }
        ],
        "system": "Campfire",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Cooked Noodles": {
        "ingredients": [
            {
                "label": "A",
                "item": "Uncooked Noodles",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Cheesy Noodles": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cheese Sauce",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Cooked Noodles",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Fish Fry": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Fish",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Furnace or Smoker",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Popcorn": {
        "ingredients": [
            {
                "label": "A",
                "item": "Corn",
                "qty": 1
            }
        ],
        "system": "Campfire",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Chocolate Cake": {
        "ingredients": [
            {
                "label": "A",
                "item": "Chocolate Cake Mix",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Bake in Furnace",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Vanilla Buttercream Cake": {
        "ingredients": [
            {
                "label": "A",
                "item": "Vanilla Cake",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Buttercream",
                "qty": 1
            }
        ],
        "system": "Hold Stone Sword in Hand Crafting Bench",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Caramel": {
        "ingredients": [
            {
                "label": "A",
                "item": "Sugar",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Cream",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "A"
            ],
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Milk Solids": {
        "ingredients": [
            {
                "label": "A",
                "item": "Milk Bucket",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Hold White Carpet in Hand Crafting Bench",
        "table": [
            [
                "A",
                "B",
                "B"
            ],
            [
                "B",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Butter Ghee": {
        "ingredients": [
            {
                "label": "A",
                "item": "Milk Solids",
                "qty": 1
            }
        ],
        "system": "Hold Cook Utensils in Hand Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Cheese": {
        "ingredients": [
            {
                "label": "A",
                "item": "Milk Solids",
                "qty": 1
            }
        ],
        "system": "Hold White Carpet in Hand Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
    "Dried Fruit": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Fruit",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Smoker",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Dried Bugs": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Bugs",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Fuel",
                "qty": 1
            }
        ],
        "system": "Smoker",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Cheese Ball": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cheese",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Butter Ghee",
                "qty": 1
            },
            {
                "label": "C",
                "item": "Spice",
                "qty": 1
            },
            {
                "label": "D",
                "item": "Salt",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "B",
                "B"
            ],
            [
                "C",
                "C",
                "D"
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Meat Fat": {
        "ingredients": [
            {
                "label": "A",
                "item": "Any Raw Meat (no fish)",
                "qty": 1
            }
        ],
        "system": "Hold Cook Utensils Crafting Table",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Missing Land Brew": {
        "ingredients": [
            {
                "label": "A",
                "item": "Brew Base",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Spruce Leaves",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "B",
                ""
            ],
            [
                "B",
                "A",
                "B"
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Black Tea Leaves": {
        "ingredients": [
            {
                "label": "A",
                "item": "Spruce Leaves",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Dark Oak Leaves",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Green Tea Leaves": {
        "ingredients": [
            {
                "label": "A",
                "item": "Oak Leaves",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Jungle Leaves",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Petal Tea Leaves": {
        "ingredients": [
            {
                "label": "A",
                "item": "Birch Leaves",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Acacia Leaves",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Rose Wine": {
        "ingredients": [
            {
                "label": "A",
                "item": "Wine Base",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Rose Bush",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "",
                "B",
                ""
            ],
            [
                "B",
                "A",
                "B"
            ],
            [
                "",
                "B",
                ""
            ]
        ]
    },
    "Strawberry or Chocolate Milk": {
        "ingredients": [
            {
                "label": "A",
                "item": "Strawberry or Chocolate Sauce",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Milk Bucket",
                "qty": 1
            }
        ],
        "system": "Crafting Table",
        "table": [
            [
                "A",
                "A",
                "B"
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Petal Tea": {
        "ingredients": [
            {
                "label": "A",
                "item": "Petal Tea Leaves",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Poppy",
                "qty": 1
            }
        ],
        "system": "Hold Brewer's Supplies Crafting Table",
        "table": [
            [
                "A",
                "B",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Coffee": {
        "ingredients": [
            {
                "label": "A",
                "item": "Coffee Grounds",
                "qty": 1
            },
            {
                "label": "B",
                "item": "Sugar",
                "qty": 1
            }
        ],
        "system": "Hold Brewer's Supplies Crafting Table",
        "table": [
            [
                "A",
                "A",
                "B"
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Green or Black Tea": {
        "ingredients": [
            {
                "label": "A",
                "item": "Green or Black Tea Leaves",
                "qty": 1
            }
        ],
        "system": "Hold Brewer's Supplies Crafting Table",
        "table": [
            [
                "A",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "",
                ""
            ]
        ]
    },
    "Coffee Grounds": {
        "ingredients": [
            {
                "label": "A",
                "item": "Cocoa Beans",
                "qty": 1
            }
        ],
        "system": "Grindstone",
        "table": [
            [
                "",
                "A",
                ""
            ],
            [
                "",
                "",
                ""
            ],
            [
                "",
                "A",
                ""
            ]
        ]
    },
  "Small Iron Plate": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Iron Plate": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Iron Ingot",
        "qty": 3
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Iron Plate": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Iron Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Downgrade Molten Iron": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Molten Iron into Medium Molten Iron into Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "N/A",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Refine into Small Gold Nugget": {
    "ingredients": [
      {
        "label": "A",
        "item": "Gold Ingot",
        "qty": 1
      }
    ],
    "system": "N/A",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Refine into Small Iron Nugget": {
    "ingredients": [
      {
        "label": "A",
        "item": "Iron Ingot",
        "qty": 1
      }
    ],
    "system": "N/A",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Refine into Small Gold Bar": {
    "ingredients": [
      {
        "label": "A",
        "item": "Gold Nugget",
        "qty": 9
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Refine into Small Silver Bar": {
    "ingredients": [
      {
        "label": "A",
        "item": "Silver Nuggets",
        "qty": 9
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Ball Bearings": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "N/A",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bell": {
    "ingredients": [
      {
        "label": "A",
        "item": "Stick",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Nugget",
        "qty": 1
      }
    ],
    "system": "N/A",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Caltrops": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Ingot (MC)",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Chain": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Crowbar": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small\u00a0 Iron Plate",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hold Smith's Tools Hammer": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Sledge Hammer": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Hammer",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Manacles": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Plate",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hold Smith's Tools Steel Mirror": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pinch of Silver Dust",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Nugget",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Blown Glass",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Piton": {
    "ingredients": [
      {
        "label": "A",
        "item": "Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Iron Pot": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Hammer",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ]
    ]
  },
  "Portable Ram": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ]
    ]
  },
  "Merchant's Scale": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "C",
        ""
      ]
    ]
  },
  "Box of Metal Scales": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget (10 in each slot)",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Box of Rivets": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Armor Stud": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
    },
  "Box of Armor Studs": {
    "ingredients": [
      {
        "label": "A",
        "item": "Armor Stud",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
    },
  "Scale Mail": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather Armor",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Box of Metal Scales",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "B",
        ""
      ],
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Ring Mail": {
    "ingredients": [
      {
        "label": "A",
        "item": "Iron Chain",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "C",
        "",
        ""
      ]
    ]
  },
  "Chain Shirt": {
    "ingredients": [
      {
        "label": "A",
        "item": "Iron Chain",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Chain Mail": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chain Shirt",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Chain",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Splint Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather Armor",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Padding",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "C",
        "C",
        "C"
      ],
      [
        "D",
        "D",
        "E"
      ]
    ]
  },
  "Half Plate": {
    "ingredients": [
      {
        "label": "A",
        "item": "Breast Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polished Iron Plate",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Box of Armor Studs",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "F",
        "item": "Binding Agent",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "C",
        "D",
        "E"
      ],
      [
        "E",
        "F",
        ""
      ]
    ]
  },
  "Plate Helm": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Iron Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Binding Agent",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Padding",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "D",
        "D",
        "E"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Breast Plate": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather Armor",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polished Iron Plate",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Medium Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "C",
        "D",
        "D"
      ],
      [
        "E",
        "E",
        "E"
      ]
    ]
  },
  "Plate Sleeves": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Fine Leather Sheet",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Padding",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "F",
        "item": "Box of Rivets",
        "qty": 1
      },
      {
        "label": "G",
        "item": "Armor Stud",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "D",
        "E",
        "F"
      ],
      [
        "G",
        "G",
        "G"
      ]
    ]
  },
  "Plate Leggins": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Iron Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Padding",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "C",
        "C",
        "D"
      ]
    ]
  },
  "Plate Boots": {
    "ingredients": [
      {
        "label": "A",
        "item": "Large Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Padding",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "B",
        "C",
        "C"
      ],
      [
        "D",
        "D",
        "E"
      ]
    ]
  },
  "Plate Armor": {
    "ingredients": [
      {
        "label": "A",
        "item": "Breast Plate",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Plate Boots",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Plate Sleeves",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Plate Helm",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Plate Leggins",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "D",
        ""
      ],
      [
        "C",
        "A",
        "C"
      ],
      [
        "",
        "B",
        "E"
      ]
    ]
  },
  "Shield": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "C",
        "A"
      ],
      [
        "B",
        "B",
        ""
      ]
    ]
  },
  "Javelin": {
    "ingredients": [
      {
        "label": "A",
        "item": "Long Haft",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Flint",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Dagger Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Blade Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Dagger Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Dagger Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Dagger": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Dagger Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Shortsword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Blade Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Shortsword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Shortsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "C",
        ""
      ]
    ]
  },
  "Shortsword": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Shortsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Longsword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 3
      },
      {
        "label": "B",
        "item": "Blade Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Longsword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Longsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "B",
        "C"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Longsword": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Longsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Greatsword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 3
      },
      {
        "label": "B",
        "item": "Blade Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Great sword Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Greatsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Great sword": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Greatsword Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Rapier Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Blade Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Rapier Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Rapier Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rapier": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Rapier Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Halberd Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 3
      },
      {
        "label": "B",
        "item": "Axe Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Halberd Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Halberd Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Medium Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "B",
        "A"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Halberd": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Halberd Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Battleaxe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Axe Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Battleaxe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Battleaxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "C",
        ""
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Battleaxe": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Battleaxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Handaxe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Axe Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Handaxe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Handaxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Handaxe": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Handaxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Great axe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Axe Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Great axe Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Greataxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "C",
        "C"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ]
    ]
  },
  "Great axe": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Greataxe Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Light Hammer Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Blunt Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Light Hammer Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Light Hammer Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Light Hammer": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Light Hammer Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough War Pick Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 3
      },
      {
        "label": "B",
        "item": "Blunt Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished War Pick Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough War Pick Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "War Pick": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished War Pick Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Maul Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Blunt Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Maul Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Maul Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "C",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Maul": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Maul Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Mace Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Blunt Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Mace Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Mace Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Mace": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Mace Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Warhammer Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Blunt Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Warhammer Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Warhammer Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "B",
        "C"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Warhammer": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Warhammer Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Sickle Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Unusual Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Sickle Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Sickle Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Sickle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Sickle Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Flail Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Unusual Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Flail Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Flail Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "C",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Flail": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Flail Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Morningstar Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 3
      },
      {
        "label": "B",
        "item": "Unusual Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Morningstar Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Morningstar Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "B",
        "C"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Morningstar": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Morningstar Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Pike Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Unusual Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Pike Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Pike Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Pike": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Pike Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Scimitar Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Unusual Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Scimitar Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Scimitar Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Scimitar": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Scimitar Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Spear Tip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polearm Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Spear Tip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Spear Tip",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Spear": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Spear Tip",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Long Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Glaive Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Medium Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polearm Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Glaive Blade": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Glaive Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "C",
        "C",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Glaive": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Glaive Blade",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Trident Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polearm Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Trident Head": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Trident Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Trident": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Trident Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Rough Lance Body": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Ingot",
        "qty": 2
      },
      {
        "label": "B",
        "item": "Polearm Weapon Book",
        "qty": 1
      }
    ],
    "system": "Anvil",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Polished Lance Body": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rough Lance Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Polish",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "C",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Lance": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Lance Head",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Grappling Hook": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Iron Nugget",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Rope",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hourglass": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sand",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Blown Glass",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "C",
        "A",
        "C"
      ],
      [
        "C",
        "B",
        "C"
      ],
      [
        "C",
        "A",
        "C"
      ]
    ]
  },
  "Hunting Trap": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Lamp": {
    "ingredients": [
      {
        "label": "A",
        "item": "Blown Glass",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hooded Lamp": {
    "ingredients": [
      {
        "label": "A",
        "item": "Lamp",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bullseye Lantern": {
    "ingredients": [
      {
        "label": "A",
        "item": "Lantern",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Polish",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Magnifying Glass": {
    "ingredients": [
      {
        "label": "A",
        "item": "Blown Glass",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Gold Bar",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Leather Strap",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "C",
        ""
      ]
    ]
  },
  "Simple Firing Mechanism": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Medium Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Powerful Firing Mechanism": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Small Iron Ingot",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Medium Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "C",
        "C",
        ""
      ]
    ]
  },
  "Intricate Firing Mechanism": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Large Iron Ingot",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "B"
      ]
    ]
  },
  "Mech Pet": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Iron Plates",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Chain",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Yellow Dye",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Small Iron Plate",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Box of Armor Studs",
        "qty": 1
      },
      {
        "label": "F",
        "item": "Glowstone (block)",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "D",
        "A",
        "D"
      ],
      [
        "B",
        "C",
        "B"
      ],
      [
        "F",
        "E",
        "F"
      ]
    ]
  },
  "Mech Mount": {
    "ingredients": [
      {
        "label": "A",
        "item": "Polished Iron Plates",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Iron Chain",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Yellow Dye",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Small Iron Plate",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Box of Armor Studs",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "C",
        "B"
      ],
      [
        "D",
        "E",
        "D"
      ]
    ]
  },
  "Broomstick Mount": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Activated Enchanted Dust",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Hay Block",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Waxed String",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Polished Iron Plate",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "B",
        "E",
        "B"
      ],
      [
        "D",
        "C",
        "D"
      ]
    ]
  },
  "Waxed String": {
    "ingredients": [
      {
        "label": "A",
        "item": "String",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Honeycomb",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Reinforced Bowstring": {
    "ingredients": [
      {
        "label": "A",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Rope Strands": {
    "ingredients": [
      {
        "label": "A",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Woven Fabric": {
    "ingredients": [
      {
        "label": "A",
        "item": "White Wool",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "A"
      ],
      [
        "B",
        "A",
        "B"
      ],
      [
        "A",
        "B",
        "A"
      ]
    ]
  },
  "Padding": {
    "ingredients": [
      {
        "label": "A",
        "item": "White Wool",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bedroll": {
    "ingredients": [
      {
        "label": "A",
        "item": "Leather",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Padding",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Hempen Rope (50ft)": {
    "ingredients": [
      {
        "label": "A",
        "item": "Rope Strands",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Sling": {
    "ingredients": [
      {
        "label": "A",
        "item": "Waxed String",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Strap",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Net": {
    "ingredients": [
      {
        "label": "A",
        "item": "Small Molten Iron",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Flying Carpet Mount": {
    "ingredients": [
      {
        "label": "A",
        "item": "Activated Enchanted Dust",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Yellow Dye",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Purple Dye",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Woven Fabric",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "D",
        "A",
        "D"
      ],
      [
        "B",
        "A",
        "C"
      ],
      [
        "D",
        "A",
        "D"
      ]
    ]
  },
  "Tree Sap": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Grindstone",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Reinforced Wood": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Short Haft": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Long Haft": {
    "ingredients": [
      {
        "label": "A",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Projectile Shaft": {
    "ingredients": [
      {
        "label": "B",
        "item": "Feather",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Small Molten Iron",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "B",
        "B",
        "C"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Druidic Focus": {
    "ingredients": [
      {
        "label": "A",
        "item": "Pinch of Silver Dust",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "B",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "10ft Ladder": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "B"
      ],
      [
        "B",
        "B",
        "B"
      ],
      [
        "B",
        "",
        ""
      ]
    ]
  },
  "10 ft. Pole": {
    "ingredients": [
      {
        "label": "A",
        "item": "Oak Log",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        ""
      ]
    ]
  },
  "Signal Whistle": {
    "ingredients": [
      {
        "label": "A",
        "item": "Bamboo",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Tinderbox": {
    "ingredients": [
      {
        "label": "A",
        "item": "Flint",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bucket": {
    "ingredients": [
      {
        "label": "A",
        "item": "MC Oak Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "A",
        ""
      ]
    ]
  },
  "Ology Key Box": {
    "ingredients": [
      {
        "label": "A",
        "item": "Key 1",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Key 2",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Key 3",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "C"
      ],
      [
        "D",
        "D",
        "D"
      ],
      [
        "D",
        "",
        ""
      ]
    ]
  },
  "Arrow Tip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Flint",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "20x Arrow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Arrow Tip",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Projectile Shaft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Bolt Tip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Flint",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "20x Crossbow Bolts": {
    "ingredients": [
      {
        "label": "A",
        "item": "Bolt Tip",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Projectile Shaft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "50x Blowgun Needles": {
    "ingredients": [
      {
        "label": "A",
        "item": "Short Haft",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        "A"
      ]
    ]
  },
  "Upper Bow Limb": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "A",
        "",
        "B"
      ]
    ]
  },
  "Lower Bow Limb": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "A",
        "",
        ""
      ],
      [
        "",
        "A",
        "B"
      ]
    ]
  },
  "Shortbow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Upper Bow Limb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Grip",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Reinforced Bowstring",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Leather Guard",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Lower\u00a0 Bow Limb",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        "E"
      ],
      [
        "D",
        "D",
        "C"
      ],
      [
        "C",
        "C",
        ""
      ]
    ]
  },
  "Longbow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Upper Bow Limb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Leather Guard",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Shortbow",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Lower Bow Limb",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        "B"
      ],
      [
        "",
        "C",
        ""
      ],
      [
        "",
        "D",
        "B"
      ]
    ]
  },
  "Grip": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        ""
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        "B"
      ]
    ]
  },
  "Crossbow Limb": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "A",
        "",
        "A"
      ],
      [
        "",
        "",
        "B"
      ]
    ]
  },
  "Crossbow Stock": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Woodworker's Oil",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "",
        ""
      ],
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "",
        "B"
      ]
    ]
  },
  "Light Crossbow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crossbow Limb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Bowstring",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Simple Firing Mechanism",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Grip",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Crossbow Stock",
        "qty": 1
      }
    ],
    "system": "Campfire",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "C",
        "D",
        "E"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Heavy Crossbow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crossbow Limb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Bowstring",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Powerful Firing Mechanism",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Grip",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Crossbow Stock",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "C",
        "D",
        "E"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Hand Crossbow": {
    "ingredients": [
      {
        "label": "A",
        "item": "Crossbow Limb",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Reinforced Bowstring",
        "qty": 1
      },
      {
        "label": "C",
        "item": "Intricate Firing Mechanism",
        "qty": 1
      },
      {
        "label": "D",
        "item": "Grip",
        "qty": 1
      },
      {
        "label": "E",
        "item": "Crossbow Stock",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "C",
        "D",
        "E"
      ],
      [
        "A",
        "B",
        ""
      ]
    ]
  },
  "Dart": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Sand",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Blowgun Barrel": {
    "ingredients": [
      {
        "label": "A",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "A",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Blowgun": {
    "ingredients": [
      {
        "label": "A",
        "item": "Blowgun Barrel",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "A",
        "A"
      ],
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Club": {
    "ingredients": [
      {
        "label": "A",
        "item": "Waxed String",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "",
        "A",
        ""
      ],
      [
        "",
        "B",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Great Club": {
    "ingredients": [
      {
        "label": "A",
        "item": "Club",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Chunk of Wood",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "B",
        "A",
        "B"
      ],
      [
        "",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  },
  "Quarterstaff": {
    "ingredients": [
      {
        "label": "A",
        "item": "Long Haft",
        "qty": 1
      },
      {
        "label": "B",
        "item": "Waxed String",
        "qty": 1
      }
    ],
    "system": "Crafting Table",
    "table": [
      [
        "A",
        "",
        ""
      ],
      [
        "B",
        "",
        ""
      ],
      [
        "",
        "",
        ""
      ]
    ]
  }
};
