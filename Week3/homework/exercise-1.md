## Exercise 1: Normalization

### What columns violate 1NF?

Columns: dinner_date: should use the same attribute domain,
food_code: should contain only one value,
food_description: should contain only one value.

### What entities do you recognize that could be extracted?

member, address, dinner, venue, food

### Name all the tables and columns that would make a 3NF compliant solution.

- member TABLE: member_id(PK), member_name, address_id
- address TABLE: address_id(PK), house_no, street
- dinner TABLE: dinner_id(PK), venue_code, food_code
- venue TABLE: venue_code(PK), venue_description
- food TABLE: food_code(PK), food_description
- member_dinner TABLE: member_id(PK), dinner_id
- dinner_food TABLE: dinner_id(PK), food_code
