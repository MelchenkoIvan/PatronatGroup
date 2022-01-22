using Microsoft.EntityFrameworkCore.Migrations;

namespace PatronatGroup.EntityFramework.Migrations
{
    public partial class UpdatedtLawyers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "tLawyers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "tLawyers");
        }
    }
}
