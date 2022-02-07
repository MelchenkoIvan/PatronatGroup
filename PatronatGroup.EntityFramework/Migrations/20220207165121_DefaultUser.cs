using Microsoft.EntityFrameworkCore.Migrations;

namespace PatronatGroup.EntityFramework.Migrations
{
    public partial class DefaultUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "tLawyers",
                newName: "DescriptionUA");

            migrationBuilder.AddColumn<string>(
                name: "DescriptionEN",
                table: "tLawyers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDefaultAdmin",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DescriptionEN",
                table: "tLawyers");

            migrationBuilder.DropColumn(
                name: "IsDefaultAdmin",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "DescriptionUA",
                table: "tLawyers",
                newName: "Description");
        }
    }
}
