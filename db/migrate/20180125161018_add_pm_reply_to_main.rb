class AddPmReplyToMain < ActiveRecord::Migration[5.1]
  def change
    add_column :mains, :pmReply, :string
  end
end
