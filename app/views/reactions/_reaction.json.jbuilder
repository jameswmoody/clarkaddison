json.extract! reaction, :id, :description, :rating, :dog_id, :created_at, :updated_at
json.url reaction_url(reaction, format: :json)
