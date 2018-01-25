class CreateMains < ActiveRecord::Migration[5.1]
  def change
    create_table :mains do |t|
      t.string :postId
      t.string :tags
      t.string :reply
      t.string :done

      t.timestamps
    end
  end
end
