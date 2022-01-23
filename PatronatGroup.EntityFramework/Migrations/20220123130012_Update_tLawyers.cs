using Microsoft.EntityFrameworkCore.Migrations;

namespace PatronatGroup.EntityFramework.Migrations
{
    public partial class Update_tLawyers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "tLawyers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "tLawyers");
        }
    }
}
